import { useLayoutEffect } from "react";
import { Text, View } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../Colors/Colors";
import ExpenseForm from "../Components/Form/ExpenseForm";
import { useDispatch } from "react-redux";
import { removeExpense } from "../Store/Redux/ExpensesSlice";

function ManageExpenses({ route, navigation }) {
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (route.params.mode === "EDIT") {
      navigation.setOptions({
        title: "EDIT EXPENSE",
        headerRight: ({ color, size }) => (
          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
            onPress={() => {
              console.log("ID", route.params.value.id);
              dispatch(removeExpense({ id: route.params.value.id }));
              navigation.goBack();
            }}
          >
            <Ionicons name="ios-trash" color={Colors.white} size={24} />
          </Pressable>
        ),
      });
    } else {
      navigation.setOptions({ title: "ADD EXPENSE" });
    }
  }, []);
  let screen = <ExpenseForm state="NEW" />;
  if (route.params.mode === "EDIT") {
    screen = <ExpenseForm value={route.params.value} state="OLD" />;
  }
  return (
    <View style={{ flex: 1, backgroundColor: Colors.primary100 }}>
      {screen}
    </View>
  );
}

export default ManageExpenses;
