import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../Screens/Main/AllExpenses";
import RecentExpenses from "../Screens/Main/RecentExpenses";
import { Colors } from "../Colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import {
  Pressable,
  StyleSheet,
  Switch,
  View,
  ImageBackground,
} from "react-native";
import { useContext, useState } from "react";
import { ScreenMode } from "../Store/Context/ScreenModeCtx";
import { AuthContext } from "../Store/Context/AuthContext";

const Tab = createBottomTabNavigator();

function MainExpense() {
  const [isEnabled, setIsEnabled] = useState(false);
  const screenModeCtx = useContext(ScreenMode);
  const authCtx = useContext(AuthContext);
  const MODE = screenModeCtx.mode;

  return (
    <ImageBackground
      resizeMode="cover"
      style={{ flex: 1 }}
      source={
        MODE === "LIGHT"
          ? require("../assets/coconut.jpg")
          : require("../assets/moon.jpg")
      }
    >
      <Tab.Navigator
        screenOptions={({ route, navigation }) => ({
          headerStyle: {
            // backgroundColor:
            //   MODE === "LIGHT" ? Colors.reddish500 : Colors.primary700,
            backgroundColor:
              MODE === "LIGHT" ? "rgba(256,256,256,0.4)" : "rgba(0,0,0,0.9)",
          },
          headerTintColor: MODE === "LIGHT" ? Colors.black : Colors.white,
          tabBarStyle: {
            backgroundColor:
              MODE === "LIGHT" ? "rgba(256,256,256,0.7)" : "rgba(0,0,0,0.9)",
          },
          tabBarActiveTintColor: MODE === "LIGHT" ? Colors.black : Colors.white,
          headerLeft: () => (
            <View style={styles.toogleSwitch}>
              <Switch
                trackColor={{
                  false: Colors.primary700,
                  true: Colors.white,
                }}
                thumbColor={isEnabled ? Colors.black : Colors.white}
                ios_backgroundColor={Colors.black}
                onValueChange={() => setIsEnabled(!isEnabled)}
                onChange={() =>
                  screenModeCtx.switchMode(isEnabled ? "LIGHT" : "DARK")
                }
                value={isEnabled}
              />
            </View>
          ),
        })}
        sceneContainerStyle={{
          backgroundColor: "rgba(0,0,0,0.2)",
        }}
      >
        <Tab.Screen
          name="ALL EXPENSES"
          component={AllExpenses}
          options={({ route, navigation }) => ({
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="hourglass" color={color} size={size} />
            ),
            headerRight: ({ tintColor }) => (
              <Pressable
                style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
                onPress={() => {
                  navigation.navigate("MANAGE EXPENSES", { mode: "ADD" });
                }}
              >
                <Ionicons
                  name="ios-add"
                  color={tintColor}
                  size={30}
                  style={{
                    marginHorizontal: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Pressable>
            ),
          })}
        />
        <Tab.Screen
          name="RECENT EXPENSES"
          component={RecentExpenses}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar" color={color} size={size} />
            ),
            headerRight: ({ tintColor }) => (
              <Pressable
                style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
                onPress={() => {
                  authCtx.logOut();
                }}
              >
                <Ionicons
                  name="exit-outline"
                  color={tintColor}
                  size={30}
                  style={{
                    marginHorizontal: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              </Pressable>
            ),
          }}
        />
      </Tab.Navigator>
    </ImageBackground>
  );
}

export default MainExpense;

const styles = StyleSheet.create({
  toogleSwitch: {
    marginLeft: 10,
  },
});
