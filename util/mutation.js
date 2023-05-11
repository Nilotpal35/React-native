import axios from "axios";
import { Alert } from "react-native";

const URI = "https://expense-tracker-c7c13-default-rtdb.firebaseio.com/";

export async function sendExpense(expenseItem, authToken) {
  if (authToken) {
    try {
      const response = await axios.post(
        URI + `/expenses.json?auth=${authToken}`,
        expenseItem
      );
      return response.data.name;
    } catch (e) {
      Alert.alert("SEND EXPENSE ", e.message);
    }
  }
}

export async function getExpenses(authToken) {
  console.log("GET EXPENSE ", authToken);
  if (authToken) {
    try {
      const response = await axios.get(
        URI + `/expenses.json?auth=${authToken}`
      );
      console.log("RESPONSE DATA", response.data);
      const Expenses = [];

      for (const key in response.data) {
        Expenses.push({ id: key, ...response.data[key] });
      }

      return Expenses;
    } catch (e) {
      Alert.alert("GET EXPENSE ", e.message);
    }
    return [];
  }
}

export async function mutateExpense(ID, expneseItem, authToken) {
  if (authToken) {
    try {
      await axios.put(
        URI + `/expenses/${ID}.json?auth=${authToken}`,
        expneseItem
      );
    } catch (e) {
      Alert.alert("MUTATE EXPENSE", e.message);
    }
  }
}

export async function deleteExpense(ID, authToken) {
  if (authToken) {
    try {
      await axios.delete(URI + `/expenses/${ID}.json?auth=${authToken}`);
    } catch (e) {
      Alert.alert(" DELETE EXPENSE ", e.message);
    }
  }
}
