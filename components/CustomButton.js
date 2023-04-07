import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

const CustomButton = ({ children, onPress }) => {
  const { width, height } = useWindowDimensions();

  const BACKGROUND_COLOR = height < width ? "purple" : "rgb(163, 228, 215 )";
  const BUTTON_COLOR = height < width ? "rgb(163, 228, 215 )" : "purple";

  return (
    <View style={styles.outerContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [
                styles.button,
                { backgroundColor: BACKGROUND_COLOR },
                styles.press,
              ]
            : [styles.button, { backgroundColor: BACKGROUND_COLOR }]
        }
      >
        <Text style={[styles.text, { color: BUTTON_COLOR }]}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  text: {
    //color: "purple",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  outerContainer: {
    margin: 22,
    //padding: 12,
    //backgroundColor: "rgba(150,150,100,0.5)",
    borderRadius: 28,
    overflow: "hidden",
  },
  button: {
    //backgroundColor: "rgb(163, 228, 215 )",
    padding: 12,
  },
  press: {
    opacity: 0.5,
    color: "red",
  },
});
