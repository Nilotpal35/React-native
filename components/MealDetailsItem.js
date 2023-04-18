import { View, Text, StyleSheet, Image } from "react-native"

function MealDetailsItem({
  image,
  title,
  affordability,
  complexity,
  duration,
  ingredients,
  steps,
}) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.innerContainer}>
          <Text style={styles.detailText}>
            {affordability.charAt(0).toUpperCase() + affordability.slice(1)}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.detailText}>
            {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.detailText}>{duration}</Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>ingredients</Text>
        </View>
        <View style={styles.innerView}>
          {ingredients &&
            ingredients.map((item) => (
              <Text key={item} style={styles.innerText}>
                {item},
              </Text>
            ))}
        </View>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>steps</Text>
        </View>
        <View style={styles.innerView}>
          {steps &&
            steps.map((item) => (
              <Text key={item} style={styles.innerText}>
                {item},
              </Text>
            ))}
        </View>
      </View>
    </View>
  );
}

export default MealDetailsItem;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    margin: 10,
    overflow: "hidden",
  },
  imageContainer: {
    elevation: 5,
    shadowRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 15,
    overflow: "hidden",
  },
  innerContainer: {
    margin: 10,
    //flexDirection: "row",
  },
  detailContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  headerTextContainer: {
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: "white",
    marginHorizontal: 50,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  innerView: {
    margin: 5,
    //padding: 5,
    flexDirection: "column",
  },
  innerText: {
    fontSize: 16,
    margin: 5,
    textAlign: "center",
    color: "white",
  },
  image: {
    height: 300,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
});
