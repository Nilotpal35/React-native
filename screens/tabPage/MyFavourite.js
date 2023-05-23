import { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { FavouriteCtx } from "../../store/Context/favouriteContext";
import { MEALS } from "../../data/dummy-data";
import MealGridTile from "../../components/UI/MealGridTile";
const renderMealItems = (itemData) => {
  const item = itemData.item;
  return <MealGridTile {...item} />;
};

const MyFavourite = () => {
  const favouriteCtx = useContext(FavouriteCtx);
  const Favourite_Meals = MEALS.filter((item) =>
    favouriteCtx.ids.includes(item.id)
  );
  console.log("FAVOURITE-MEALS", Favourite_Meals);
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.text}>My Favourite Meals</Text>
      </View>
      <FlatList
        data={Favourite_Meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItems}
      />
    </>
  );
};

export default MyFavourite;

const styles = StyleSheet.create({
  header: {
    margin: 12,
    borderRadius: 8,
    backgroundColor: "blue",
    padding: 8,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: 500,
    textAlign: "center",
  },
});
