import { useNavigation, useRoute } from "@react-navigation/native";
import { Button, FlatList, Text, View } from "react-native";
import { MEALS } from "../../data/dummy-data";
import MealGridTile from "../../components/UI/MealGridTile";

function renderMealItems(itemData) {
  const data = itemData.item;
  return <MealGridTile key={data.id} {...data} />;
}

export default function DetailMeal() {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params;
  const FILTERED_MEALS = MEALS.filter((item) =>
    item.categoryIds.includes(params.id)
  );

  return (
    // <View>
    //   <Text>This is Details Meal page.</Text>
    //   <Text>{params.title}</Text>
    //   <Button
    //     title="NAVIGATE"
    //     onPress={() => navigation.navigate("MEALS DESCRIPTION")}
    //   />
    // </View>
    <FlatList
      data={FILTERED_MEALS}
      keyExtractor={(item) => item.id}
      renderItem={renderMealItems}
    />
  );
}
