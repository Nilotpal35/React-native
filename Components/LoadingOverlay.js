import { ActivityIndicator, View, Text, StyleSheet } from "react-native";

export default function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator size="large" color="White" />
      <Text style={{ color: "white ", fontSize: 15 }}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});
