import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import SingleItem from "../components/SingleItem";
import { useLayoutEffect } from "react";

function CategoryItem(itemData) {
  return (
    <SingleItem
      title={itemData.item.title}
      color={itemData.item.color}
      id={itemData.item.id}
    />
  );
}

function CategoriesScreen({ navigation, route }) {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={CategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
