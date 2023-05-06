import ExpenseItemGridTile from "./ExpenseItemGridTile";

function RenderExpenseItem({ itemData }) {
  const item = {
    id: itemData.item.id,
    title: itemData.item.title,
    amount: itemData.item.amount,
    date: itemData.item.date,
    description: itemData.item.description,
  };
  return <ExpenseItemGridTile {...item} />;
}

export default RenderExpenseItem;
