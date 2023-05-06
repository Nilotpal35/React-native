import { useContext, useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../Colors/Colors";
import ExpenseForm from "../Components/Form/ExpenseForm";
import { useDispatch } from "react-redux";
import { removeExpense } from "../Store/Redux/ExpensesSlice";
import { ScreenMode } from "../Store/Context/ScreenModeCtx";
import { deleteExpense } from "../util/mutation";
import LoadingIndicator from "../Components/UI/LoadingIndicator";

function ManageExpenses({ route, navigation }) {
  const [isLoading, setIsLoading] = useState(false);
  const PARAMS_VALUE = route.params?.value;
  const PARAMS_STATE = route.params?.mode;
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (route.params.mode === "EDIT") {
      navigation.setOptions({
        title: "EDIT EXPENSE",
        headerRight: ({ color, size }) => (
          <Pressable
            style={({ pressed }) => (pressed ? { opacity: 0.5 } : null)}
            onPress={async () => {
              setIsLoading(true);
              await deleteExpense(route.params.value.id);
              dispatch(removeExpense({ id: route.params.value.id }));
              navigation.goBack();
            }}
          >
            <Ionicons name="ios-trash" color={Colors.white} size={24} />
          </Pressable>
        ),
        headerStyle: {
          backgroundColor:
            MODE === "LIGHT" ? Colors.pinkish500 : Colors.primary700,
        },
      });
    } else {
      navigation.setOptions({
        title: "ADD EXPENSE",
        headerStyle: {
          backgroundColor:
            MODE === "LIGHT" ? Colors.pinkish500 : Colors.primary700,
        },
      });
    }
  }, [navigation, route.params, dispatch, MODE]);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  const initialFormValue = {
    ids: PARAMS_VALUE ? PARAMS_VALUE.id : "",
    titles: PARAMS_VALUE ? PARAMS_VALUE.title : "",
    amounts: PARAMS_VALUE ? PARAMS_VALUE.amount : "",
    dates: PARAMS_VALUE ? PARAMS_VALUE.date : "",
    descriptions: PARAMS_VALUE ? PARAMS_VALUE.description : "",
    state: PARAMS_STATE,
  };
  let screen = <ExpenseForm {...initialFormValue} />;
  if (route.params.mode === "EDIT") {
    screen = <ExpenseForm {...initialFormValue} />;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:
          MODE === "LIGHT" ? Colors.accent200 : Colors.primary100,
      }}
    >
      {screen}
    </View>
  );
}

export default ManageExpenses;
