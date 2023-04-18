import { useLayoutEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const MealsPreview = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name ? route.params.name : " ",
    });
  }, [navigation]);

  const filteredMeals = MEALS.filter((item) => {
    return (
      item.categoryIds.indexOf(
        route.params.CategoryId ? route.params.CategoryId : "c1"
      ) >= 0
    );
  });
  return <MealsList filteredMeals={filteredMeals} />;
};

export default MealsPreview;
