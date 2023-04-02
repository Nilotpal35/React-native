import { Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.button, styles.press] : styles.button
        }
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    color: "purple",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  outerContainer: {
    margin: 12,
    //padding: 12,
    //backgroundColor: "rgba(150,150,100,0.5)",
    borderRadius: 28,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "rgb(163, 228, 215 )",
    padding: 12,
  },
  press: {
    opacity: 0.5,
    color: "red",
  },
});
