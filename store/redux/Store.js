import { configureStore } from "@reduxjs/toolkit";
import EmailReducer from "./EmailSlice";

const store = configureStore({
  reducer: {
    emails: EmailReducer,
  },
});

export default store;
