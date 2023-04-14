import { View, Pressable, Image, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealPreviewItem({ title, imageUrl, id }) {
  const navigation = useNavigation();
  const navigationHandler = () => {
    navigation.navigate("Meals Details View", { id: id, name: title });
  };

  return (
    <View style={styles.gridTile}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.button, { opacity: 0.7 }] : styles.button
        }
        onPress={navigationHandler}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealPreviewItem;

const styles = StyleSheet.create({
  gridTile: {
    //flex: 1,
    margin: 25,
    //height: 160,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    overflow: "hidden",
  },
  button: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
});
