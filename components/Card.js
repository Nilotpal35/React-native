import { SafeAreaView, View, StyleSheet } from "react-native";

export default function Card({ children }) {
  return <SafeAreaView style={styles.mainContainer}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#b42450",
    marginTop: 80,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
