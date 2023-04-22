import React, { useEffect, useLayoutEffect, useState } from "react";
import { Button, FlatList, Pressable } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealDetailsItem from "../components/MealDetailsItem";
import { Ionicons } from "@expo/vector-icons";
import { FavoriteContext } from "../store/context/order-context";

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
  const favoriteMealsCtx = React.useContext(FavoriteContext);
  const containes = favoriteMealsCtx.id.includes(route.params.id);

  const favoriteHandler = () => {
    if (containes) {
      favoriteMealsCtx.removeFavorite(route.params.id);
    } else {
      favoriteMealsCtx.addFavorite(route.params.id);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name ? route.params.name : " ",
      headerRight: () => (
        <Pressable onPress={favoriteHandler}>
          <Ionicons
            name={containes ? "star" : "star-outline"}
            color={"black"}
            size={24}
          />
        </Pressable>
      ),
    });
  }, [navigation, favoriteHandler]);
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
