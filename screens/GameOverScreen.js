import { Text, View, StyleSheet, ScrollView } from "react-native";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";

export default function GameOverScreen({ userNumber, rounds, newGameHandler }) {
  return (
    <View style={styles.mainContainer}>
      <Header>GAME OVER</Header>
      <View style={styles.container}>
        <Text style={styles.outerText}>
          You have needed <Text style={styles.innerText}>{rounds}</Text>
          rounds to guess <Text style={styles.innerText}>{userNumber}</Text>
        </Text>
      </View>
      <CustomButton onPress={newGameHandler}>Start New Game</CustomButton>
    </View>
  );
}

const styles = StyleSheet.create({
  outerText: {
    color: "white",
    fontSize: 17,
  },
  innerText: {
    color: "purple",
    fontWeight: "bold",
    fontSize: 20,
    //paddingRight: 5
  },
  container: {
    margin: 20,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
