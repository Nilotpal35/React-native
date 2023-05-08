import { LinearGradient } from "expo-linear-gradient";
import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { getData } from "../util/https";
import { AuthContext } from "../Store/context/AuthContext";

export default function Welcome() {
  const [fetchedMessage, setFetchedMessage] = useState("");
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function requestData() {
      try {
        const data = await getData(authCtx.token, "Test");
        setFetchedMessage(data);
      } catch (error) {
        Alert.alert("WELCOME", error.message);
      }
    }
    requestData();
  }, []);
  return (
    <LinearGradient colors={["#7D0552", "#E799A3"]} style={styles.rootCotainer}>
      <View>
        <Text style={styles.text}>This is Welcome Screen</Text>
        <Text style={styles.text}>{fetchedMessage}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootCotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewContainer: {},
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
});
