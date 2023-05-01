import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [
    {
      id: "c1",
      title: "A book",
      amount: 21.22,
      description:
        "Book is comprised of information which we need to improve human being",
    },
    {
      id: "c2",
      title: "A Toy",
      amount: 15.52,
      description: "Toy is comprised of information which we need for fun",
    },
  ],
};

const ExpensesSlice = createSlice({
  name: "Expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      console.log("ADD EXPENSE SLICE", action.payload.newExpense);
      //state.expenses.push(action.payload.newExpense);
      state.expenses = [action.payload.newExpense, ...state.expenses];
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
        state.expenses[index].description = updatedExpense.description;
      }
    },
  },
});

export const { addExpense, removeExpense, updateExpense } =
  ExpensesSlice.actions;

export default ExpensesSlice.reducer;
