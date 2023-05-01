import { configureStore } from "@reduxjs/toolkit";
import ExpensesSlice from "./ExpensesSlice";

const store = configureStore({
  reducer: {
    expenses: ExpensesSlice,
  },
});

export default store;
