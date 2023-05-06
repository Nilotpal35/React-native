import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

const ExpensesSlice = createSlice({
  name: "Expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload.newExpense);
    },
    setExpense: (state, action) => {
      state.expenses = action.payload.expenses;
      state.expenses = state.expenses.reverse();
    },
    removeExpense: (state, action) => {
      state.expenses = state.expenses.filter(
        (item) => item.id !== action.payload.id
      );
    },
    updateExpense: (state, action) => {
      const updatedExpense = action.payload.expense;
      const index = state.expenses.findIndex(
        (item) => item.id === action.payload.expense.id
      );
      if (index !== -1) {
        state.expenses[index].title = updatedExpense.title;
        state.expenses[index].amount = updatedExpense.amount;
        state.expenses[index].date = updatedExpense.date;
        state.expenses[index].description = updatedExpense.description;
      }
    },
  },
});

export const { addExpense, setExpense, removeExpense, updateExpense } =
  ExpensesSlice.actions;

export default ExpensesSlice.reducer;
