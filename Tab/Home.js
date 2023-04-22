import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsDetails from "../screens/MealsDetails";
import MealsPreview from "../screens/MealsPreview";
import CategoriesScreen from "../screens/CategoriesScreen";

const Stack = createNativeStackNavigator();

const Home = ({ route, navigation }) => {
  return (
    <>
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
    </>
  );
};

export default Home;
