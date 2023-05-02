import {
  Text,
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { useSelector } from "react-redux";
import ExpenseItemGridTile from "../Components/UI/ExpenseItemGridTile";
import { Colors } from "../Colors/Colors";
import { useContext } from "react";
import { ScreenMode } from "../Store/Context/ScreenModeCtx";

function renderExpenseItem(itemData) {
  const item = {
    id: itemData.item.id,
    title: itemData.item.title,
    amount: itemData.item.amount,
    date: itemData.item.date,
    description: itemData.item.description,
  };
}

function RecentExpenses() {
  const Expenses = useSelector((state) => state.expenses.expenses);
  console.log("FINALll EXPENSES", Expenses);
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  const { height, width } = useWindowDimensions();
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
        renderItem={renderExpenseItem}
      />
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  flatViewCotainer: {
    flex: 1,
    backgroundColor: Colors.primary100,
  },
  sumContainer: {
    backgroundColor: Colors.primary400,
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
    backgroundColor: Colors.primary700,
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
