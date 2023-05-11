import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainExpense from "./Tab/MainExpense";
import ManageExpenses from "./Screens/Main/ManageExpenses";
import { Colors } from "./Colors/Colors";
import { Provider } from "react-redux";
import store from "./Store/Redux/store";
import { ImageBackground, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ScreenModeCtx, { ScreenMode } from "./Store/Context/ScreenModeCtx";
import { useContext, useEffect, useState } from "react";
import AuthContextProvider, { AuthContext } from "./Store/Context/AuthContext";
import LogIn from "./Screens/Auth/Login";
import SignUp from "./Screens/Auth/SignUp";

const Stack = createNativeStackNavigator();

const ExpenseTrackerApp = () => {
  return (
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
              style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
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
  );
};

function Authentication() {
  return (
    <ImageBackground
      resizeMode="cover"
      style={{ flex: 1 }}
      source={require("./assets/nature2.jpg")}
    >
      <Stack.Navigator
        screenOptions={() => ({
          headerShown: false,
          contentStyle: { backgroundColor: "rgba(0,0,0,0)" },
        })}
      >
        <Stack.Screen name="LOGIN" component={LogIn} />
        <Stack.Screen name="SIGNUP" component={SignUp} />
      </Stack.Navigator>
    </ImageBackground>
  );
}

const Transition = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    setIsAuthenticated(authCtx.isAuthenticated);
  }, [authCtx]);
  return (
    <>
      <StatusBar style={MODE === "LIGHT" ? "dark" : "light"} />
      <NavigationContainer>
        {!isAuthenticated && <Authentication />}
        {isAuthenticated && <ExpenseTrackerApp />}
      </NavigationContainer>
    </>
  );
};

export default function App() {
  return (
    <>
      <ScreenModeCtx>
        <AuthContextProvider>
          <Provider store={store}>
            <Transition />
          </Provider>
        </AuthContextProvider>
      </ScreenModeCtx>
    </>
  );
}
