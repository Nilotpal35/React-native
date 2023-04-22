import React from "react";
import MealDetail from "../components/mealDetail";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/order-context";

const Fav = ({ route, navigation }) => {
  const favoriteMealsCtx = React.useContext(FavoriteContext);

  const filteredMeal = MEALS.filter((items) =>
    favoriteMealsCtx.id.includes(items.id)
  );
  return (
    <>
      <MealDetail filteredMeals={filteredMeal} />
    </>
  );
};

export default Fav;
