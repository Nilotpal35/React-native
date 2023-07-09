import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Email from "./screens/Email";
import Calendar from "./screens/Calendar";
import Feed from "./screens/Feed";
import Apps from "./screens/Apps";
import EmailStack from "./screens/EmailsStack/EmailStack";
import { GlobalColors } from "./utils/Colors";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";
import { Provider } from "react-redux";
import store from "./store/redux/Store";

const BottomTab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        headerBackTitleVisible: false,
        headerBackButtonMenuEnabled: true,
        headerStyle: { backgroundColor: GlobalColors.blue.blue100 },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 20, fontWeight: "600" },
        tabBarStyle: { backgroundColor: GlobalColors.blue.blue100 },
        tabBarInactiveTintColor: GlobalColors.grey.grey800,
        tabBarActiveTintColor: "white",
      })}
      sceneContainerStyle={{ backgroundColor: "white" }}
    >
      <BottomTab.Screen
        name="EMAILSTACK"
        component={EmailStack}
        options={({}) => ({
          headerShown: false,
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="email-open-multiple"
                size={24}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="email-open-multiple-outline"
                size={24}
                color={color}
              />
            ),
        })}
      />
      <BottomTab.Screen
        name="CALENDAR"
        component={Calendar}
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="calendar-month"
                size={25}
                color={color}
              />
            ) : (
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={25}
                color={color}
              />
            ),
        }}
      />
      <BottomTab.Screen
        name="FEED"
        component={Feed}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name={"dynamic-feed"} size={25} color={color} />
          ),
        })}
      />
      <BottomTab.Screen
        name="APPS"
        component={Apps}
        options={() => ({
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <AntDesign name="appstore1" size={22} color={color} />
            ) : (
              <AntDesign name="appstore-o" size={22} color={color} />
            ),
        })}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar style="light" />
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </Provider>
    </>
  );
}
