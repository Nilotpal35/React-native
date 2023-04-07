import { View, Text, StyleSheet } from "react-native";

export default function Header({ children }) {
  return (
    <View style={styles.head}>
      <Text style={styles.header}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    //fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "#F7DC6F",
  },
  head: {
    borderBottomColor: "#D35400",
    borderBottomWidth: 5,
    marginHorizontal: 25,
    padding: 20,
    //marginVertical: 25,
  },
});
