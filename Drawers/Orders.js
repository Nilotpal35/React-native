import React from "react";
import { Text, View } from "react-native";
import { OrderContext } from "../App";
import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

function Orders({ route, navigation }) {
  const value = React.useContext(OrderContext).map((item) => item.id);

  const filteredMeals = MEALS.filter((item) => value.includes(item.id));

  return (
    <>
      <View style={{ flex: 1 }}>
        <MealsList filteredMeals={filteredMeals} />
      </View>
    </>
  );
}

export default Orders;
