import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "../Screens/AllExpenses";
import RecentExpenses from "../Screens/RecentExpenses";
import { Colors } from "../Colors/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Tab = createBottomTabNavigator();

function MainExpense() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerStyle: { backgroundColor: Colors.primary600 },
        headerTintColor: Colors.white,
        tabBarStyle: { backgroundColor: Colors.primary600 },
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
