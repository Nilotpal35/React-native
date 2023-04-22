import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/mealDetail";

const MealsPreview = ({ route, navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name ? route.params.name : " ",
    });
  }, [navigation]);
  //console.log(route.params);
  const filteredMeals = MEALS.filter((item) => {
    return (
      item.categoryIds.indexOf(
        route.params.CategoryId ? route.params.CategoryId : "c1"
      ) >= 0
    );
  });
  return <MealDetail filteredMeals={filteredMeals} />;
};

export default MealsPreview;
