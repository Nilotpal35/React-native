import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Drawers/Home";
import Orders from "./Drawers/Orders";
import { Foundation, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import React from "react";

const Tab = createBottomTabNavigator();

export const OrderContext = React.createContext();

export default function App() {
  const [savedOrders, setSavedOrders] = useState([]);

  const saveHandler = (value) => {
    setSavedOrders((prevState) => {
      return [...prevState, { id: value }];
    });
  };

  const deleteHandler = (value) => {
    setSavedOrders((prevState) => {
      return prevState.filter((item) => item.id !== value);
    });
  };

  return (
    <OrderContext.Provider value={savedOrders}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator
          style={{ backgroundColor: "red" }}
          screenOptions={{
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: "black",
            tabBarStyle: { backgroundColor: "#cccccc" },
            tabBarShowLabel: false,
          }}
          sceneContainerStyle={{ backgroundColor: "#0C708B" }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: "home",
              tabBarIcon: ({ color, size }) => (
                <Foundation name="home" color={color} size={size} />
              ),
              headerShown: false,
            }}
            initialParams={{ onSave: saveHandler, onDelete: deleteHandler }}
          />
          <Tab.Screen
            name="Favorites"
            component={Orders}
            options={{
              headerStyle: { backgroundColor: "#cccccc" },
              tabBarLabel: "FAV",
              tabBarIcon: ({ color, size }) => (
                <FontAwesome name="star" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </OrderContext.Provider>
  );
}
