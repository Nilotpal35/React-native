import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const SingleItem = ({ title, color, id }) => {
  const navigation = useNavigation();
  const navigationHandler = () => {
    navigation.navigate("Meals Preview View", { CategoryId: id, name: title });
  };

  return (
    <View style={[styles.gridTile]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? { opacity: 0.5 } : styles.button,
        ]}
        onPress={navigationHandler}
      >
        <View style={[styles.item, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SingleItem;

const styles = StyleSheet.create({
  gridTile: {
    flex: 1,
    margin: 20,
    height: 160,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    overflow: "hidden",
    borderRadius: 10,
  },
  button: {
    flex: 1,
  },
  item: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
