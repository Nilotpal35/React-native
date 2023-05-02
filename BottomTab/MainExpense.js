import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../Screens/AllExpenses";
import RecentExpenses from "../Screens/RecentExpenses";
import { Colors } from "../Colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Switch, View } from "react-native";
import { useContext, useState } from "react";
import { ScreenMode } from "../Store/Context/ScreenModeCtx";

const Tab = createBottomTabNavigator();

function MainExpense() {
  const [isEnabled, setIsEnabled] = useState(false);
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: {
          backgroundColor:
            MODE === "LIGHT" ? Colors.reddish500 : Colors.primary700,
        },
        headerTintColor: Colors.white,
        tabBarStyle: {
          backgroundColor:
            MODE === "LIGHT" ? Colors.reddish500 : Colors.primary700,
        },
        tabBarActiveTintColor: Colors.white,
        headerRight: () => (
          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
            onPress={() => {
              navigation.navigate("MANAGE EXPENSES", { mode: "ADD" });
            }}
          >
            <Ionicons
              name="ios-add"
              color={Colors.white}
              size={30}
              style={{
                marginHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </Pressable>
        ),
        headerLeft: () => (
          <View style={styles.toogleSwitch}>
            <Switch
              trackColor={{ false: Colors.primary700, true: Colors.reddish400 }}
              thumbColor={isEnabled ? Colors.primary700 : Colors.reddish400}
              ios_backgroundColor={Colors.primary700}
              onValueChange={() => setIsEnabled(!isEnabled)}
              onChange={() =>
                screenModeCtx.switchMode(isEnabled ? "LIGHT" : "DARK")
              }
              value={isEnabled}
            />
          </View>
        ),
      })}
    >
      <Tab.Screen
        name="ALL EXPENSES"
        component={AllExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="RECENT EXPENSES"
        component={RecentExpenses}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainExpense;

const styles = StyleSheet.create({
  toogleSwitch: {
    marginLeft: 10,
  },
});
