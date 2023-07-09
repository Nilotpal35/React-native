import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  Pressable,
  TextInput,
  Button,
} from "react-native";

import { GlobalColors } from "../../../utils/Colors";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmail, removeEmail } from "../../../store/redux/EmailSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useNavigation } from "@react-navigation/native";

export default function NewMail({ modalVisible, setModalVisible }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    time: "",
  });

  const [focus, setFocus] = useState({
    focus1: false,
    focus2: false,
    focus3: false,
  });
  let data = "ram";
  const buttonHandler = () => {
    try {
      dispatch(addEmail(formData));
      console.log("SAVED - SUCCESS :)");
      setModalVisible();
    } catch (error) {
      console.log("DELETE - FAILED :(");
    }
  };

  return (
    <Modal visible={modalVisible} presentationStyle="slide" style={{ flex: 1 }}>
      <SafeAreaView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={styles.headerText}>New Mail</Text>
          <Pressable
            style={({ pressed }) => [pressed && { opacity: 0.5 }, styles.icons]}
            onPress={setModalVisible}
          >
            <Entypo name="cross" size={50} color={GlobalColors.blue.blue200} />
          </Pressable>
        </View>
        <View style={styles.form}>
          <Text style={styles.text}>Title</Text>
          <TextInput
            keyboardAppearance="dark"
            style={[
              styles.textInput,
              focus.focus1 && {
                borderColor: GlobalColors.purple.purple100,
                borderWidth: 2,
              },
            ]}
            onChangeText={(e) =>
              setFormData((prevData) => ({ ...prevData, title: e }))
            }
            onFocus={() => setFocus((prev) => ({ ...prev, focus1: true }))}
            onBlur={() => setFocus((prev) => ({ ...prev, focus1: false }))}
            placeholder="title"
          />
          <Text style={styles.text}>Message</Text>
          <TextInput
            keyboardAppearance="dark"
            style={[
              styles.textInput,
              focus.focus2 && {
                borderColor: GlobalColors.purple.purple100,
                borderWidth: 2,
              },
            ]}
            onChangeText={(e) =>
              setFormData((prevData) => ({ ...prevData, message: e }))
            }
            onFocus={() => setFocus((prev) => ({ ...prev, focus2: true }))}
            onBlur={() => setFocus((prev) => ({ ...prev, focus2: false }))}
            placeholder="message"
          />
          <Text style={styles.text}>Date</Text>
          <TextInput
            keyboardAppearance="dark"
            style={[
              styles.textInput,
              focus.focus3 && {
                borderColor: GlobalColors.purple.purple100,
                borderWidth: 2,
              },
            ]}
            onChangeText={(e) =>
              setFormData((prevData) => ({ ...prevData, time: e }))
            }
            onFocus={() => setFocus((prev) => ({ ...prev, focus3: true }))}
            onBlur={() => setFocus((prev) => ({ ...prev, focus3: false }))}
            onEndEditing={() =>
              setFocus((prev) => ({ ...prev, focus3: false }))
            }
            placeholder="yyyy-mm-dd"
          />
          <View style={styles.buttonView}>
            <Pressable
              style={({ pressed }) => [
                pressed && { opacity: 0.5 },
                styles.buttonPress,
              ]}
              onPress={buttonHandler}
            >
              <Text style={styles.buttonText}>Save</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    //fontWeight: 600,
    marginLeft: 25,
  },
  icons: {
    margin: 15,
  },
  form: {
    //backgroundColor: "red",
    marginHorizontal: 10,
    borderRadius: 8,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  border: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    marginHorizontal: 10,
  },
  textInput: {
    //borderBottomColor: GlobalColors.yellow.yellow900,
    borderWidth: 1,
    marginHorizontal: 10,
    height: 50,
    marginVertical: 7,
    borderRadius: 8,
    padding: 8,
    fontSize: 20,
    //fontWeight: 500,
    backgroundColor: GlobalColors.grey.grey100,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: 600,
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPress: {
    backgroundColor: "blue",
    padding: 10,
    width: 70,
    borderRadius: 8,
    margin: 20,
  },
  buttonText: {
    fontSize: 18,
    //fontWeight: 600,
    textAlign: "center",
    color: "white",
  },
});
