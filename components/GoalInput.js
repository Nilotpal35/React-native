import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Button,
  View,
  Alert,
  Modal,
} from "react-native";

const GoalInput = (props) => {
  //const [GoalItems , setGoalItems] = useState([]);
  const [enteredText, setEnteredText] = useState("");

  const onAddGoal = () => {
    props.onAddGoals(enteredText);
    //Alert.alert("Goal Added");
    props.onCancel();
    setEnteredText("");
  };
  const demo = () => {};

  return (
    <Modal animationType="slide">
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input}
          value={enteredText}
          placeholder="Write your Goal"
          onChangeText={setEnteredText}
        />
        <View style={styles.text}>
          <Button
            title="Cancel"
            onPress={() => {
              props.onCancel();
            }}
          />
          <Button title="Add Goal" onPress={onAddGoal} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   //alignItems:'center',
  //   //justifyContent: 'space-evenly',
  // },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#bbbbbb",
    fontSize: 20,
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    //backgroundColor: '#bbbbbb',
    padding: 10,
  },
});
