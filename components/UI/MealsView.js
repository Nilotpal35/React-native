import { FlatList } from "react-native";
import CategoryGridTile from "./CategoryGridTile";

function renderAllCategories(itemData) {
  return <CategoryGridTile {...itemData.item} />;
}

export default function MealsView({ CATEGORIES }) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderAllCategories}
      numColumns={2}
    />
  );
}
