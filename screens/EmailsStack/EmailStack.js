import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Email from "./Email";
import EmailDetail from "../../components/UI/EmailUI/EmailDetail";
import { GlobalColors } from "../../utils/Colors";

const Stack = createNativeStackNavigator();

export default function EmailStack() {
  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerBackTitleVisible: false,
        headerBackButtonMenuEnabled: true,
        headerStyle: { backgroundColor: GlobalColors.blue.blue100 },
        headerTintColor: "white",
        headerTitleStyle: { fontSize: 18, fontWeight: "600" },
      })}
    >
      <Stack.Screen name="EMAIL" component={Email} />
      <Stack.Screen
        name="EmailInfo"
        component={EmailDetail}
        options={{ title: "DETAILS" }}
      />
    </Stack.Navigator>
  );
}
