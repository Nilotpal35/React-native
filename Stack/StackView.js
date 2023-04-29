import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "../Styles/Colors";
import EditPostModal from "../Modal/EditPost";
import TabView from "../Tab/TabView";

const Stack = createNativeStackNavigator();

function StackView() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: Colors.primary600 },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Bottom Tab"
        component={TabView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Modal View"
        component={EditPostModal}
        options={{
          presentation: "modal",
          title: "Edit Post",
        }}
      />
    </Stack.Navigator>
  );
}

export default StackView;
