import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import MainScreen from "./screens/MainScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
//import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  //this screen appear as Home screen
  let screen = (
    <MainScreen
      onInputNumber={(pickedNumber) => {
        setUserNumber(pickedNumber);
        setGameIsOver(false);
      }}
    />
  );

  //this screen appears as Game screen when user enters a valid number
  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={(number) => {
          setGuessRounds(number);
          setGameIsOver(true);
        }}
      />
    );
  }

  // this screen appear when the game is over
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={guessRounds}
        newGameHandler={() => {
          setUserNumber(null);
          setGuessRounds(0);
        }}
      />
    );
  }

  return (
    <>
    <StatusBar style='auto'/>
    <LinearGradient
      colors={["#2cb89a", "#2c98b8", "#ca3995"]}
      style={styles.container}
    >
      <ImageBackground
        source={require("./assets/DICE.png")}
        resizeMode="cover"
        style={styles.ImageBackground}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
  },
  image: {
    opacity: 0.4,
  },
});
