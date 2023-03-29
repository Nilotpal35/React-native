import { SafeAreaView, StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View>
      {props &&
        props.items.map((item) => (
          <Pressable
            onPress={() => {
              console.log("PRESSED");
            }}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(100, 100, 100)" : "transparent",
              },
            ]}
          >
            <Text key={item} style={styles.item}>
              {item}
            </Text>
          </Pressable>
        ))}
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#bbbbbb",
  },
  item: {
    margin: 10,
    padding: 10,
    //backgroundColor: "",
    fontSize: 20,
    color: "purple",
    flexDirection: "column",
  },
});
