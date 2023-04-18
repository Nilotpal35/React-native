import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import MealsPreview from "../screens/MealsPreview";
import MealsDetails from "../screens/MealsDetails";

const Stack = createNativeStackNavigator();

function Home({ route, params }) {
  function onStar(value) {
    route.params.onSave(value);
  }
  function onDestar(value) {
    route.params.onDelete(value);
  }

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
        <Stack.Screen
          name="Meals Details View"
          component={MealsDetails}
          //options={(route, navigation) => ({})}
          initialParams={{ onStar: onStar, onDestar: onDestar }}
        />
      </Stack.Navigator>
    </>
  );
}

export default Home;
