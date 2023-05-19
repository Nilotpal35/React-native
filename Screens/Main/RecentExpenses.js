import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Alert,
} from "react-native";
import { useSelector } from "react-redux";
import { Colors } from "../../Colors/Colors";
import { useContext, useEffect, useState } from "react";
import { ScreenMode } from "../../Store/Context/ScreenModeCtx";
import StickeyHeader from "../../Components/UI/StickeyHeader";
import ExpensesList from "../../Components/UI/ExpensesList";

function RecentExpenses() {
  const Expenses = useSelector((state) => state.expenses.expenses) || [];
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  const { height, width } = useWindowDimensions();

  const finalExpenses = Expenses.map((item) => {
    const date = item.date.split("/");
    const finalDate = `${date[0]}-${date[1]}-${date[2]}`;
    return {
      ...item,
      date: finalDate,
    };
  })
    .filter(
      (item) =>
        (new Date() - new Date(item.date)) / (1000 * 60 * 60 * 24) > 0 &&
        (new Date() - new Date(item.date)) / (1000 * 60 * 60 * 24) <= 7
    )
    .map((item) => {
      const date = item.date.split("-");
      const finalDate = `${date[0]}/${date[1]}/${date[2]}`;
      return {
        ...item,
        date: finalDate,
      };
    });

  const finalAmount = finalExpenses.reduce((sum, item) => {
    return (sum += item.amount);
  }, 0);

  return (
    <View
      style={[
        styles.flatViewCotainer,
        // {
        //   backgroundColor:
        //     MODE === "LIGHT" ? Colors.lightGrey : Colors.primary100,
        // },
      ]}
    >
      <StickeyHeader
        text="Last 7 days"
        finalAmount={finalAmount}
        MODE={MODE}
        styles={styles}
        width={width}
      />

      {finalExpenses.length > 0 ? (
        <ExpensesList Expenses={finalExpenses} />
      ) : (
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text,
              { color: MODE === "LIGHT" ? "black" : "white" },
            ]}
          >
            Recent Expenses List Empty!!
          </Text>
        </View>
      )}
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  flatViewCotainer: {
    flex: 1,
  },
  sumContainer: {
    //backgroundColor: Colors.primary400,
    minHeight: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: Colors.primary100,
    borderRadius:8,
    margin:10
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
    borderRadius: 5,
    margin : 5
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
    //justifyContent: "center",
    marginTop: 10,
  },
});
