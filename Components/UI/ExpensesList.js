import { FlatList } from "react-native";
import RenderExpenseItem from "./RenderExpenseItem";

function renderExpenseItem(itemData) {
  return <RenderExpenseItem itemData={itemData} />;
}

function ExpensesList({ Expenses }) {
  return (
    <FlatList
      data={Expenses}
      keyExtractor={(item) => item.id}
      renderItem={renderExpenseItem}
    />
  );
}

export default ExpensesList;
