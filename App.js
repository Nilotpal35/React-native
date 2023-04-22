import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Tab/Home";
import Fav from "./Tab/Fav";
import { Ionicons } from "@expo/vector-icons";
import FavoriteContextProvider from "./store/context/order-context";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <FavoriteContextProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              tabBarActiveTintColor: "black",
              tabBarStyle: { backgroundColor: "#cccccc" },
            }}
            sceneContainerStyle={{ backgroundColor: "#0C708B" }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={(route, navigation) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              })}
            />
            <Tab.Screen
              name="Fav"
              component={Fav}
              options={{
                headerStyle: { backgroundColor: "#cccccc" },
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="star" color={color} size={size} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </FavoriteContextProvider>
    </>
  );
}
