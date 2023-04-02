import { useState } from "react";
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Card from "../components/Card";
import CustomButton from "../components/CustomButton";
import Header from "../components/Header";

const MainScreen = ({ onInputNumber }) => {
  const [enteredText, setEnteredText] = useState("");

  const inputParamValidation = () => {
    const parameter = parseInt(enteredText);

    if (isNaN(parameter) || parameter <= 0) {
      Alert.alert("Number is Invalid", "Please Enter a Valid One");
      return;
    }
    onInputNumber(parameter);
  };

  return (
    <Card>
      <Header>Enter your Choice</Header>
      <TextInput
        style={styles.textInput}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        maxLength={2}
        value={enteredText}
        onChangeText={setEnteredText}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <CustomButton
            onPress={() => {
              setEnteredText("");
            }}
          >
            RESET
          </CustomButton>
        </View>
        <View style={styles.button}>
          <CustomButton onPress={inputParamValidation}>ADD ON</CustomButton>
        </View>
      </View>
    </Card>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    width: 50,
    fontWeight: "bold",
    fontSize: 28,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
    //justifyContent: "center",
    //alignItems: "center",
    textAlign: "center",
    color: "#ddb52f",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  text: {
    color: "white",
  },
  button: {
    flex: 1,
  },
});
