import { useEffect, useLayoutEffect } from "react";
import { FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDetailsItem from "../components/MealDetailsItem";

function renderMealDetailsItem(itemData) {
  const item = itemData.item;
  const mealDetailsItemProps = {
    image: item.imageUrl,
    title: item.title,
    affordability: item.affordability,
    complexity: item.complexity,
    duration: item.duration,
    ingredients: item.ingredients,
    steps: item.steps,
  };

  return <MealDetailsItem {...mealDetailsItemProps} />;
}

function MealsDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name ? route.params.name : " ",
    });
  }, [navigation]);
  const mealId = route.params.id ? route.params.id : " ";
  const filteredMeal = MEALS.filter((items) => items.id === mealId);
  return (
    <FlatList
      data={filteredMeal}
      keyExtractor={(item) => item.id}
      renderItem={renderMealDetailsItem}
      contentInsetAdjustmentBehavior="automatic"
    />
  );
}

export default MealsDetails;
