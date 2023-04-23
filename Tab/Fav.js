import React from "react";
import MealDetail from "../components/mealDetail";
import { MEALS } from "../data/dummy-data";
//import { FavoriteContext } from "../store/context/order-context";
import { useSelector } from "react-redux";

const Fav = ({ route, navigation }) => {
  //const favoriteMealsCtx = React.useContext(FavoriteContext);
  const favoriteMeals = useSelector(state => state.favoriteMeals.id);

  const filteredMeal = MEALS.filter((items) =>
    favoriteMeals.includes(items.id)
  );
  return (
    <>
      <MealDetail filteredMeals={filteredMeal} />
    </>
  );
};

export default Fav;
