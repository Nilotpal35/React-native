import MealPreviewItem from "./MealPreviewItem";
import { FlatList } from "react-native";

function mealsPreviewGridTile(itemData) {
  const item = itemData.item;
  const mealsPreviewItems = {
    title: item.title,
    imageUrl: item.imageUrl,
    id: item.id,
  };

  return <MealPreviewItem {...mealsPreviewItems} />;
}

export default function MealDetail({ filteredMeals }) {
  return (
    <FlatList
      data={filteredMeals}
      keyExtractor={(item) => item.id}
      renderItem={mealsPreviewGridTile}
    />
  );
}
