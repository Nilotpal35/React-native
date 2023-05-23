import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CategoryGridTile({ id, title, color }) {
  const navigation = useNavigation();

  const categoryPressHandler = () => {
    navigation.navigate("MEAL DETAIL", { id, title });
  };

  return (
    <>
      {/* {show && (
          <ModalView
          onPress={() => setShow(!show)}
          data={{ id, title, color }}
          style={styles}
        />
      )} */}
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.rootConrainer, { opacity: 0.5 }]
            : styles.rootConrainer
        }
        onPress={() => categoryPressHandler()}
      >
        <View style={[styles.gridTile, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  rootConrainer: {
    flex: 1,
    overflow: "hidden",
  },
  gridTile: {
    margin: 20,
    height: 150,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "purple",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: 500,
  },
});
