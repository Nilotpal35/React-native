import { useLayoutEffect, useState } from "react";
import { FlatList, Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetailsItem from "../components/MealDetailsItem";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { OrderContext } from "../App";

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

function MealsDetails({ route, navigation }) {
  const [saved, setSaved] = useState(false);
  const value = React.useContext(OrderContext);
  let savedValues = value.map((item) => item.id);

  function starHandler() {
    setSaved(false);
    route.params.onDestar(route.params.id);
  }

  function deStarHandler() {
    setSaved(true);
    route.params.onStar(route.params.id);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params.name ? route.params.name : " ",
      headerRight: () =>
        savedValues && savedValues.includes(route.params.id) ? (
          <Pressable onPress={starHandler}>
            <Entypo name="star" size={24} color="black" />
          </Pressable>
        ) : (
          <Pressable onPress={deStarHandler}>
            <Entypo name="star-outlined" size={24} color="black" />
          </Pressable>
        ),
    });
  }, [navigation, saved, starHandler, deStarHandler]);

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
