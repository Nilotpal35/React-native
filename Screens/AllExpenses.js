import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Colors } from "../Colors/Colors";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { ScreenMode } from "../Store/Context/ScreenModeCtx";
import { getExpenses } from "../util/mutation";
import { setExpense } from "../Store/Redux/ExpensesSlice";
import StickeyHeader from "../Components/UI/StickeyHeader";
import ExpensesList from "../Components/UI/ExpensesList";
import LoadingIndicator from "../Components/UI/LoadingIndicator";

function AllExpenses() {
  const [errorMsg, setErrorMsg] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const Expenses = useSelector((state) => state.expenses.expenses);
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchExpense() {
      setIsLoading(true);
      try {
        const response = await getExpenses();
        dispatch(setExpense({ expenses: response }));
      } catch (error) {
        setErrorMsg("Some issue in Fetching...");
      }
      setIsLoading(false);
    }
    fetchExpense();
  }, []);

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (errorMsg && !isLoading) {
    Alert.alert("Error!", `${errorMsg}`, [
      { style: "destructive", text: "Go back", onPress: setErrorMsg(null) },
    ]);
  }

  const finalAmount = Expenses.reduce((sum, item) => {
    return (sum += item.amount);
  }, 0);

  return (
    <View
      style={[
        styles.flatViewCotainer,
        {
          backgroundColor:
            MODE === "LIGHT" ? Colors.lightGrey : Colors.primary100,
        },
      ]}
    >
      <StickeyHeader
        text="Total Amount"
        finalAmount={finalAmount}
        MODE={MODE}
        styles={styles}
        width={width}
      />
      {Expenses.length > 0 ? (
        <ExpensesList Expenses={Expenses} />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>Expenses List Empty!!</Text>
        </View>
      )}
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  flatViewCotainer: {
    flex: 1,
  },
  sumContainer: {
    minHeight: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Colors.primary100,
    borderBottomWidth: 2,
  },
  total: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 38,
    marginLeft: 50,
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  amount: {
    minHeight: 38,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  amountValue: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.white,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
