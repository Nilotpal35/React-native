import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import ExpenseItemGridTile from "../Components/UI/ExpenseItemGridTile";
import { Colors } from "../Colors/Colors";
import { useContext, useEffect } from "react";
import { ScreenMode } from "../Store/Context/ScreenModeCtx";
import { getExpenses } from "../util/mutation";
import { setExpense } from "../Store/Redux/ExpensesSlice";

function renderExpenseItem(itemData) {
  const item = {
    id: itemData.item.id,
    title: itemData.item.title,
    amount: itemData.item.amount,
    date: itemData.item.date,
    description: itemData.item.description,
  };
  return <ExpenseItemGridTile {...item} />;
}

function AllExpenses() {
  const Expenses = useSelector((state) => state.expenses.expenses);
  console.log("state EXPENSES", Expenses);
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchExpense() {
      const response = await getExpenses();
      console.log("RESPONSE", response);
      dispatch(setExpense({ expenses: response }));
    }
    fetchExpense();
  }, []);

  const finalAmount = Expenses.reduce((sum, item) => {
    return (sum += item.amount);
  }, 0);
  //const finalAmount = 55;

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
      <View
        style={[
          styles.sumContainer,
          {
            backgroundColor:
              MODE === "LIGHT" ? Colors.reddish400 : Colors.primary300,
          },
        ]}
      >
        <View style={styles.total}>
          <Text style={styles.amountText}>Total Amount</Text>
        </View>
        <View
          style={[
            styles.amount,
            {
              width: width > 400 ? 200 : 170,
              backgroundColor:
                MODE === "LIGHT" ? Colors.reddish500 : Colors.primary600,
            },
          ]}
        >
          <Text style={styles.amountValue}>${finalAmount.toFixed(2)}</Text>
        </View>
      </View>
      <FlatList
        data={Expenses}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => renderExpenseItem(itemData)}
      />
    </View>
  );
}

export default AllExpenses;

const styles = StyleSheet.create({
  flatViewCotainer: {
    flex: 1,
    //backgroundColor: Colors.lightGrey,
  },
  sumContainer: {
    //backgroundColor: Colors.accent500,
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
    //backgroundColor: Colors.accent800,
    minHeight: 38,
    alignItems: "center",
    justifyContent: "center",
    //width: 200,
    borderRadius: 5,
  },
  amountValue: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.white,
  },
});
