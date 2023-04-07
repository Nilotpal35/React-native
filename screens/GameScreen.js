import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import CustomButton from "../components/CustomButton";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import GuessListItem from "../components/GuessListItem";

let minBoundary = 1;
let maxBoundary = 100;

//this function will guess number on given bandwidth
const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  //this useEffect will trigger the Game Over page.
  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber]);

  //This useEffect will set MIN and MAX value to ZERO
  //when rendering this component first time.
  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
    rounds = 0;
  }, []);

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else if (direction === "greater") {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevRounds) => [newRndNumber, ...prevRounds]);
  }

  const totalRoundNumber = guessRounds.length;
  const HEIGHT = height < width ? 250 : 375;
  const MARGIN_TOP = height < width ? 20 : 40;

  const screenNormal = (
    <>
      <View style={[styles.value, { marginTop: MARGIN_TOP }]}>
        <Text style={[styles.text]}>{currentGuess}</Text>
      </View>
      <Card>
        <View>
          <Text style={styles.text}>Higher or Lower</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </CustomButton>
          </View>
          <View style={styles.button}>
            <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </CustomButton>
          </View>
        </View>
      </Card>
    </>
  );
  const screenLandscape = (
    <View style={styles.buttonsContainer}>
      <View style={styles.button}>
        <CustomButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </CustomButton>
      </View>
      <View style={[styles.value, { marginTop: MARGIN_TOP }]}>
        <Text style={styles.text}>{currentGuess}</Text>
      </View>
      <View style={styles.button}>
        <CustomButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </CustomButton>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header>Opponent's Choice</Header>
      {height < 500 ? screenLandscape : screenNormal}
      <View style={[styles.flatListContainer, { height: HEIGHT }]}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessListItem
              roundNumber={totalRoundNumber - itemData.index}
              guessItems={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    marginTop: 20,
    flex: 1,
  },
  value: {
    borderColor: "yellow",
    borderRadius: 5,
    borderWidth: 5,
    marginHorizontal: 150,
    //marginTop: 40,
    padding: 25,
  },
  text: {
    color: "yellow",
    //fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "#F7DC6F",
  },
  head: {
    borderColor: "#D35400",
    borderRadius: 38,
    borderWidth: 5,
    margin: 25,
    padding: 30,
  },
  flatListContainer: {
    //flex: 1,
    padding: 12,
    //margin: 12,
    //height: 300,
  },
});
