import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "../Styles/Colors";
import AddPost from "../Screens/AddPost";
import ViewPost from "../Screens/ViewPost";

const Tab = createBottomTabNavigator();

function TabView() {
  return (
    <Tab.Navigator
      screenOptions={{
        //tabBarActiveBackgroundColor: "#CC95DF",
        tabBarActiveTintColor: "white",
        tabBarIconStyle: { color: Colors.primary600 },
        headerStyle: { backgroundColor: Colors.primary600 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: Colors.primary600 },
      }}
    >
      <Tab.Screen
        name="Add Post"
        component={AddPost}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="note-add" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="View Post"
        component={ViewPost}
        //options={{ headerShown: false }}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="view-stream"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabView;
