import { StatusBar } from "expo-status-bar";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Welcome from "./Screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react/cjs/react.development";
import AuthContextProvider, { AuthContext } from "./Store/context/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, ImageBackground } from "react-native";
import { GlobalStyles } from "./Colors/colors";

const Stack = createNativeStackNavigator();

function AuthenticationPage() {
  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMode="cover"
      source={require("./assets/nature1.jpg")}
    >
      <Stack.Navigator
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          contentStyle: { backgroundColor: "rgba(0,0,0,0)" },
        })}
      >
        <Stack.Screen name="LOGIN" component={Login} />
        <Stack.Screen name="SIGNUP" component={Signup} />
      </Stack.Navigator>
    </ImageBackground>
  );
}

function MainWindow() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTintColor: GlobalStyles.cherrish,
        headerStyle: { backgroundColor: GlobalStyles.lightGrey },
        headerTitleStyle: { fontSize: 17, fontWeight: "600" },
        headerRight: ({ tintColor }) => (
          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.45 } : null)}
            onPress={authCtx.logOut}
          >
            <Ionicons
              name="exit-outline"
              size={24}
              color={GlobalStyles.cherrish}
            />
          </Pressable>
        ),
      })}
    >
      <Stack.Screen name="WELCOME" component={Welcome} />
    </Stack.Navigator>
  );
}

function Mediator() {
  const authCtx = useContext(AuthContext);
  const isAuthenticated = authCtx.isAuthenticated;
  return (
    <NavigationContainer>
      {!isAuthenticated && <AuthenticationPage />}
      {isAuthenticated && <MainWindow />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Mediator />
      </AuthContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
