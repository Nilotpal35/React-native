import { View, Text, StyleSheet } from "react-native";

export default function GuessListItem({ roundNumber, guessItems }) {
  return (
    <View style={styles.listItemContainer}>
      <Text style={styles.Item}>#{roundNumber}</Text>
      <Text style={styles.Item}>{guessItems}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItemContainer: {
    //flex: 1,
    backgroundColor: "rgb(163, 228, 215 )",
    borderRadius: 17,
    marginVertical: 12,
    marginHorizontal: 16,
    padding: 12,
    flexDirection: "row",
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    justifyContent: "space-between",
  },
  Item: {
    color: "purple",
    fontSize: 20,
  },
});
