import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { useContext, useLayoutEffect, useState, useEffect } from "react";
import Icon from "../../components/Icons/Icon";
import { FavouriteCtx } from "../../store/Context/favouriteContext";

export default function MealsDesc() {
  const [star, setStar] = useState(false);
  const route = useRoute();
  const navigation = useNavigation();
  const params = route.params;
  const { width, height } = useWindowDimensions();
  const favouriteCtx = useContext(FavouriteCtx);
  const {
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
  } = params;

  const pressOutHandle = () => {
    console.log("PRESSED!");
    setStar(true);
    favouriteCtx.addFavourite(id);
  };
  const pressInHandle = () => {
    console.log("REMOVED");
    setStar(false);
    favouriteCtx.removeFavourite(id);
  };

  console.log("FAVOURITE CONTEXT IDS", favouriteCtx.ids);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) =>
        favouriteCtx.ids.includes(id) ? (
          <Icon
            name={"star"}
            color={tintColor}
            size={24}
            onPress={pressInHandle}
          />
        ) : (
          <Icon
            name={"star-outline"}
            color={tintColor}
            size={24}
            onPress={pressOutHandle}
          />
        ),
    });
  }, [star, favouriteCtx]);
  return (
    <View>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: imageUrl }}
      />
      <View style={newStyles.titleText}>
        <Text style={newStyles.title}>{title}</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        style={{ paddingTop: 10 }}
      >
        {/* <View style={newStyles.SubDescription}>
          <SubDescription
            affordability={affordability}
            complexity={complexity}
            duration={duration}
            newStyles={newStyles}
          />
        </View> */}
        <View style={[newStyles.ingredients, { width: width - 20 }]}>
          <View style={newStyles.headerStyle}>
            <Text style={newStyles.header}>INGREDIENTS</Text>
          </View>
          {ingredients.map((item, i) => (
            <Text style={[newStyles.text, { color: "white" }]}>• {item}</Text>
          ))}
        </View>
        <View style={newStyles.steps}>
          <View style={newStyles.headerStyle}>
            <Text style={newStyles.header}>STEPS</Text>
          </View>
          {steps.map((item, i) => (
            <Text style={[newStyles.text, { color: "white" }]}>{item}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const newStyles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: 500,
    textAlign: "center",
  },
  rowView: {
    //flexDirection: "row",
    //alignItems: "center",
    //justifyContent: "space-around",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: 500,
    marginVertical: 5,
    textAlign: "center",
  },
  ingredients: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  steps: {
    alignItems: "center",
    justifyContent: "center",
    //marginHorizontal: 10,
    paddingHorizontal: 10,
    backgroundColor: "red",
  },
  header: {
    fontSize: 20,
    fontWeight: "700",
    fontStyle: "italic",
  },
  headerStyle: {
    borderBottomWidth: 2,
    borderColor: "black",
    //marginHorizontal: 10,
  },
  titleText: {
    //marginVertical: 9,
    padding: 9,
    borderBottomWidth: 1,
    borderColor: "purple",
  },
  SubDescription: {
    margin: 10,
    backgroundColor: "blue",
  },
});
