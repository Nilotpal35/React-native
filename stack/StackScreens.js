import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailMeal from "../screens/stackPage/DetailMeal";
import MealsDesc from "../screens/stackPage/MealsDesc";
import AllMeals from "../screens/stackPage/AllMeals";
import Icon from "../components/Icons/Icon";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Stack = createNativeStackNavigator();

export default function StackScreen() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="MEALS" component={AllMeals} />
      <Stack.Screen
        name="MEAL DETAIL"
        component={DetailMeal}
        options={({ route, navigation }) => ({
          //presentation: "modal",
        })}
      />
      <Stack.Screen
        name="MEALS DESCRIPTION"
        component={MealsDesc}
        options={({ route, navigation }) => ({
          presentation: "modal",
          // headerRight: ({ tintColor, color }) => (
          //   <Icon name={"star-outline"} color={tintColor} size={24} />
          // ),
          headerLeft: ({ color, size }) => (
            <Pressable
              style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="chevron-back-sharp" color={"black"} size={28} />
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}
