import { useEffect, useLayoutEffect } from "react";
import { FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { MEALS } from "../data/dummy-data";
import MealPreviewItem from "../components/MealPreviewItem";

function mealsPreviewGridTile(itemData) {
  const item = itemData.item;
  const mealsPreviewItems = {
    title: item.title,
    imageUrl: item.imageUrl,
    id: item.id,
  };

  return <MealPreviewItem {...mealsPreviewItems} />;
}

const MealsPreview = ({}) => {
  const route = useRoute();
  const navigation = useNavigation();

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
  return (
    <FlatList
      data={filteredMeals}
      keyExtractor={(item) => item.id}
      renderItem={mealsPreviewGridTile}
    />
  );
};

export default MealsPreview;
