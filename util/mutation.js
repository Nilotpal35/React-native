import axios from "axios";

const URI = "https://expense-tracker-c7c13-default-rtdb.firebaseio.com/";

export async function sendExpense(expenseItem) {
  const response = await axios.post(URI + "/expenses.json", expenseItem);
  return response.data.name;
}

export async function getExpenses() {
  const response = await axios.get(URI + "/expenses.json");

  const Expenses = [];

  for (const key in response.data) {
    Expenses.push({ id: key, ...response.data[key] });
  }

  return Expenses;
}

export async function mutateExpense(ID, expneseItem) {
  await axios.put(URI + `/expenses/${ID}.json`, expneseItem);
}

export async function deleteExpense(ID) {
  await axios.delete(URI + `/expenses/${ID}.json`);
}
