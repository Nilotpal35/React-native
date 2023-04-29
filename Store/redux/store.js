import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";
import marginSlice from "./marginSlice";

const store = configureStore({
  reducer: {
    posts: postSlice,
    margin: marginSlice,
  },
});

export default store;
