import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainExpense from "./Tab/MainExpense";
import ManageExpenses from "./Screens/ManageExpenses";
import { Colors } from "./Colors/Colors";
import { Provider } from "react-redux";
import store from "./Store/Redux/store";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenModeCtx, { ScreenMode } from "./Store/Context/ScreenModeCtx";
import { useContext } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  return (
    <>
      <StatusBar style="light" />
      <ScreenModeCtx>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={({ route, navigation }) => ({
                headerTintColor: Colors.white,
              })}
            >
              <Stack.Screen
                name="MAIN EXPENSES"
                component={MainExpense}
                options={() => ({ headerShown: false })}
              />
              <Stack.Screen
                name="MANAGE EXPENSES"
                component={ManageExpenses}
                options={({ route, navigation }) => ({
                  presentation: "modal",
                  headerLeft: ({ color, size }) => (
                    <Pressable
                      style={({ pressed }) =>
                        pressed ? { opacity: 0.5 } : null
                      }
                      onPress={() => {
                        navigation.goBack();
                      }}
                    >
                      <Ionicons
                        name="chevron-back-sharp"
                        color={Colors.white}
                        size={28}
                      />
                    </Pressable>
                  ),
                })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ScreenModeCtx>
    </>
  );
}
