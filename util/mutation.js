import axios from "axios";

const URI = "https://expense-tracker-c7c13-default-rtdb.firebaseio.com/";

export async function sendExpense(expenseItem) {
  await axios.post(URI + "/expenses.json", expenseItem);
}

export async function getExpenses() {
  const response = await axios.get(URI + "/expenses.json");

  const Expenses = [];

  for (const key in response.data) {
    Expenses.push({ id: key, ...response.data[key] });
  }
  console.log("EXPENSES DATABASE", Expenses);
  return Expenses;
}
