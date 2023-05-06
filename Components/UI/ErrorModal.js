import { Button, StyleSheet, View, Text } from "react-native";
import { Colors } from "../../Colors/Colors";
import { useContext } from "react";
import { ScreenMode } from "../../Store/Context/ScreenModeCtx";

export default function ErrorModal({ error, errorHandler }) {
  const screenModeCtx = useContext(ScreenMode);
  const MODE = screenModeCtx.mode;
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            MODE === "LIGHT" ? Colors.pinkish100 : Colors.primary100,
        },
      ]}
    >
      <Text>There is some {error}</Text>
      <Button title="Go Back" onPress={errorHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
