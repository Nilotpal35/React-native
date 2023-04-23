import { configureStore } from "@reduxjs/toolkit";
import favoriteMealsSlice from "./favoriteMealsSlice";

const store = configureStore({
    reducer : {
        favoriteMeals : favoriteMealsSlice
    }
})

export default store;