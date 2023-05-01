import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { Colors } from "../../Colors/Colors";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addExpense, updateExpense } from "../../Store/Redux/ExpensesSlice";
import { useNavigation } from "@react-navigation/native";

function ExpenseForm(props) {
  const [title, setTitle] = useState(props.value?.title || "");
  const [amount, setAmount] = useState(props.value?.amount.toString() || "");
  const [description, setDescription] = useState(
    props.value?.description || ""
  );
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();

  const dispatch = useDispatch();

  function buttonhandler() {
    if (
      title.length > 3 &&
      !isNaN(parseInt(amount)) &&
      parseInt(amount) > 0 &&
      description.length > 5
    ) {
      const exportItem = {
        id: props.value ? props.value.id : nanoid(),
        title: title,
        amount: parseFloat(amount),
        description: description,
      };
      if (props.value) {
        console.log("NEW VALUE", exportItem);
        dispatch(updateExpense({ expense: exportItem }));
        navigation.goBack();
      } else {
        dispatch(addExpense({ newExpense: exportItem }));
        navigation.goBack();
      }
    } else {
      Alert.alert("Warning", "please fill all the fields!");
      return;
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <ScrollView>
        <View style={styles.formContainer}>
          <View style={{ width: width - 90 }}>
            <Text style={styles.text}>Title:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
                style={styles.titleInput}
                autoCorrect={false}
                keyboardAppearance="dark"
              />
            </View>
          </View>
          <View style={{ width: width - 90 }}>
            <Text style={styles.text}>Amount:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Amount"
                value={amount}
                onChangeText={setAmount}
                style={styles.titleInput}
                keyboardAppearance="dark"
              />
            </View>
          </View>

          <View style={{ width: width - 90 }}>
            <Text style={styles.text}>Description : </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Write here ...."
                value={description}
                onChangeText={setDescription}
                style={styles.postInput}
                multiline
                maxLength={1000}
                keyboardAppearance="dark"
              />
            </View>
          </View>
          <Pressable
            style={({ pressed }) =>
              pressed ? [styles.button, { opacity: 0.5 }] : styles.button
            }
            onPress={buttonhandler}
          >
            <Text style={styles.buttonText}>Save Post</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  titleInput: {
    height: 50,
    fontSize: 20,
    padding: 10,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    backgroundColor: "white",
    borderRadius: 10,
    color: Colors.primary700,
  },
  postInput: {
    height: 150,
    padding: 10,
    borderColor: "#9915C6",
    fontSize: 18,
    borderRadius: 3,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    backgroundColor: "white",
    borderRadius: 10,
    color: Colors.primary700,
  },
  inputContainer: {
    marginVertical: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
  },
  button: {
    backgroundColor: Colors.primary600,
    padding: 15,
    borderRadius: 7,
    marginBottom: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: Colors.primary700,
  },
});
