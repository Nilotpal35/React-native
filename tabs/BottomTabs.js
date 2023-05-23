import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserDetails from "../screens/tabPage/UserDetails";
import StackScreen from "../stack/StackScreens";
import MyFavourite from "../screens/tabPage/MyFavourite";
import Icon from "../components/Icons/Icon";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarInactiveTintColor: "black",
        tabBarActiveTintColor: "purple",
      })}
    >
      <Tab.Screen
        name="ALL MEALS"
        component={StackScreen}
        options={({ route, navigation }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Ionicons name={"ios-menu-sharp"} color={color} size={24} />
            ) : (
              <Ionicons name={"ios-menu-outline"} color={color} size={24} />
            ),
        })}
      />
      <Tab.Screen
        name="FAVOURITE"
        component={MyFavourite}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <MaterialIcons name={"favorite"} color={color} size={24} />
            ) : (
              <MaterialIcons
                name={"favorite-outline"}
                color={color}
                size={24}
              />
            ),
        }}
      />
      <Tab.Screen
        name="USER DETAIL"
        component={UserDetails}
        options={{
          tabBarIcon: ({ focused, color }) =>
            focused ? (
              <Ionicons name={"person-circle-sharp"} color={color} size={24} />
            ) : (
              <Ionicons
                name={"person-circle-outline"}
                color={color}
                size={24}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
