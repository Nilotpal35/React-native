import { View, Text } from "react-native";
import MealsView from "../../components/UI/MealsView";
import { CATEGORIES } from "../../data/dummy-data";

export default function AllMeals() {
  return <MealsView CATEGORIES={CATEGORIES} />;
}
