import { ActivityIndicator, StyleSheet, View } from "react-native";
import { Colors } from "../../Colors/Colors";
import { useContext } from "react";
import { ScreenMode } from "../../Store/Context/ScreenModeCtx";

export default function LoadingIndicator() {
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
      <ActivityIndicator size="large" color="white" />
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
