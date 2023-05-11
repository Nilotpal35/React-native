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
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addExpense,
  setExpense,
  updateExpense,
} from "../../Store/Redux/ExpensesSlice";
import { useNavigation } from "@react-navigation/native";
import { ScreenMode } from "../../Store/Context/ScreenModeCtx";
import { mutateExpense, sendExpense } from "../../util/mutation";
import DatePickerComponent from "../UI/DatePickerComponent";
import LoadingIndicator from "../UI/LoadingIndicator";
import ErrorModal from "../UI/ErrorModal";
import { AuthContext } from "../../Store/Context/AuthContext";

function ExpenseForm({ ids, titles, amounts, dates, descriptions, state }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const [showCalendar, setShowCalender] = useState(false);
  const [title, setTitle] = useState(titles);
  const [amount, setAmount] = useState(amounts.toString());
  const [date, setDate] = useState(dates);
  const [description, setDescription] = useState(descriptions);
  const [inputValidate, setInputValidate] = useState({
    title: true,
    amount: true,
    date: true,
    description: true,
  });

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();

  const screenModeCtx = useContext(ScreenMode);
  const authCtx = useContext(AuthContext);
  const MODE = screenModeCtx.mode;

  useEffect(() => {
    setInputValidate({
      title: title.trim().length > 3,
      description: description.trim().length > 3,
      amount: !isNaN(+amount) && +amount > 0,
      date: date.length === 10,
    });
  }, [title, amount, description, date]);

  async function buttonhandler() {
    if (
      inputValidate.amount &&
      inputValidate.title &&
      inputValidate.date &&
      inputValidate.description
    ) {
      const fireBaseItem = {
        title: title,
        amount: parseFloat(amount),
        date: date,
        description: description,
      };
      setIsLoading(true);
      if (state === "ADD") {
        try {
          const id = await sendExpense(fireBaseItem, authCtx.token);
          dispatch(addExpense({ newExpense: { ...fireBaseItem, id: id } }));
          navigation.goBack();
        } catch (error) {
          setErrorMsg("Some issue in Saving...");
        }
      } else if (state === "EDIT") {
        try {
          await mutateExpense(ids, fireBaseItem, authCtx.token);
          dispatch(updateExpense({ expense: { ...fireBaseItem, id: ids } }));
          navigation.goBack();
        } catch (error) {
          setErrorMsg("Some issue in Updating...");
        }
      }
      setIsLoading(false);
    } else {
      Alert.alert("Warning!", `Correct the fields!`);
      return;
    }
  }

  const BTN_COLOR = MODE === "LIGHT" ? Colors.pinkish500 : Colors.primary500;

  if (isLoading) {
    return <LoadingIndicator />;
  }

  if (errorMsg && !isLoading) {
    Alert.alert("Error", `${errorMsg}`, [
      { style: "destructive", text: "Go Back", onPress: setErrorMsg(null) },
    ]);
    //return <ErrorModal error={error} errorHandler={errorHandler} />;
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
                style={[
                  styles.titleInput,
                  { borderWidth: inputValidate.title ? 0 : 2 },
                ]}
                autoCorrect={false}
                keyboardAppearance="dark"
                maxLength={15}
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
                style={[
                  styles.titleInput,
                  { borderWidth: inputValidate.amount ? 0 : 2 },
                ]}
                keyboardAppearance="dark"
                keyboardType="decimal-pad"
                maxLength={6}
              />
            </View>
          </View>
          <View style={{ width: width - 90 }}>
            <Text style={styles.text}>Date:</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="YYYY/MM/DD"
                value={date}
                onPressIn={() => setShowCalender(!showCalendar)}
                style={[
                  styles.titleInput,
                  { borderWidth: inputValidate.date ? 0 : 2 },
                ]}
                keyboardAppearance="dark"
                //keyboardType="numbers-and-punctuation"
                maxLength={10}
              />
            </View>
            <DatePickerComponent
              mode="calendar"
              showCalendar={showCalendar}
              setDate={setDate}
            />
          </View>

          <View style={{ width: width - 90 }}>
            <Text style={styles.text}>Description : </Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Write here ...."
                value={description}
                onChangeText={setDescription}
                style={[
                  styles.postInput,
                  { borderWidth: inputValidate.description ? 0 : 2 },
                ]}
                multiline
                maxLength={100}
                keyboardAppearance="dark"
                textAlign="left"
              />
              <Text
                style={[
                  styles.lengthIndicator,
                  {
                    color: description.length < 100 ? Colors.primary700 : "red",
                  },
                ]}
              >
                {description.length}/100
              </Text>
            </View>
          </View>
          <Pressable
            style={({ pressed }) =>
              pressed
                ? [
                    styles.button,
                    { backgroundColor: BTN_COLOR },
                    { opacity: 0.5 },
                  ]
                : [styles.button, { backgroundColor: BTN_COLOR }]
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
    borderColor: "red",
  },
  postInput: {
    height: 120,
    padding: 15,
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
    borderColor: "red",
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
    //backgroundColor: Colors.reddish500,
    padding: 15,
    borderRadius: 7,
    marginBottom: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: Colors.primary700,
  },
  lengthIndicator: {
    textAlign: "right",
    margin: 5,
  },
});
