import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainExpense from "./BottomTab/MainExpense";
import ManageExpenses from "./Screens/ManageExpenses";
import { Colors } from "./Colors/Colors";
import { Provider } from "react-redux";
import store from "./Store/Redux/store";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({ route, navigation }) => ({
              headerStyle: { backgroundColor: Colors.primary600 },
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
        </NavigationContainer>
      </Provider>
    </>
  );
}
