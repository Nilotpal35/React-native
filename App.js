import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsPreview from "./screens/MealsPreview";
import MealsDetails from "./screens/MealsDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#cccccc" },
            headerTintColor: "black",
            contentStyle: { backgroundColor: "#0C708B" },
          }}
        >
          <Stack.Screen
            name="Meals Catagories"
            component={CategoriesScreen}
            options={{
              title: "Meals",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen
            name="Meals Preview View"
            component={MealsPreview}
            options={{
              title: "Preview",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen name="Meals Details View" component={MealsDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
