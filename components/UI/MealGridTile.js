import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, ImageBackground } from "react-native";

const MealGridTile = ({
  id,
  categoryIds,
  title,
  affordability,
  complexity,
  imageUrl,
  duration,
  ingredients,
  steps,
  isGlutaminFree,
  isVegan,
  isVegetarian,
  isLactoseFree,
}) => {
  const navigation = useNavigation();
  console.log("ID", id);
  const data = {
    id,
    categoryIds,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    steps,
    isGlutaminFree,
    isVegan,
    isVegetarian,
    isLactoseFree,
    styles,
  };

  const pressHandler = () => {
    navigation.navigate("MEALS DESCRIPTION", { ...data });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.rootContainer,
        pressed && { opacity: 0.5 },
      ]}
      onPress={() => pressHandler()}
    >
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{ uri: imageUrl }}
        imageStyle={styles.imageStyle}
        accessibilityLabel="Alternative Text for Image"
      >
        {/* <Image style={styles.image} source={{ uri: imageUrl }} /> */}
        {/* <View>
          <Text style={styles.text}>Meals small desc</Text>
          <Text style={styles.text}>{title}</Text>
        </View> */}
      </ImageBackground>
    </Pressable>
  );
};

export default MealGridTile;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 15,
    borderColor: "grey",
    borderWidth: 2,
    //height: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 250,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  imageStyle: {
    //opacity: 0.8,
  },
  text: {
    fontSize: 25,
    color: "purple",
  },
});
