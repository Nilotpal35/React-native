import { useContext, useState } from "react";
import { Alert, KeyboardAvoidingView, StyleSheet } from "react-native";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { GlobalColor } from "../../Colors/GlobalStyles";
import SignUpForm from "../../Components/Form/SIgnUpForm";
import { createUser } from "../../util/http";
import { AuthContext } from "../../Store/Context/AuthContext";

export default function SignUp({ route, navigation }) {
  const [email, setEmail] = useState("");
  const [cnfEmail, setCnfEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const authCtx = useContext(AuthContext);

  async function formValidation() {
    const emailValidate = email.includes("@") && email === cnfEmail;
    const pwdValidate = passWord.length > 6 && passWord === cnfPassword;

    if (emailValidate && pwdValidate) {
      try {
        const { idToken, refreshToken } = await createUser(email, passWord);
        if (idToken) {
          authCtx.logIn(idToken, refreshToken);
        }
      } catch (e) {
        console.log("SIGNUP TOKEN error", e.message);
      }
    } else {
      Alert.alert("warning", "fill all the fields");
    }
  }

  const formData = {
    email: email,
    cnfEmail: cnfEmail,
    setEmail: setEmail,
    setCnfEmail: setCnfEmail,
    passWord: passWord,
    cnfPassword: cnfPassword,
    setPassword: setPassword,
    setCnfPassword: setCnfPassword,
    formValidation: formValidation,
    styles: styles,
    navigation: navigation,
  };
  return (
    <View style={styles.rootContainer}>
      <SignUpForm {...formData} />
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: 350,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 7,
    shadowColor: GlobalColor.black,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
  },
  input: {
    borderWidth: 1,
    margin: 10,
    padding: 10,
    backgroundColor: GlobalColor.lightGrey,
    fontSize: 18,
    borderRadius: 7,
  },
  button: {
    margin: 10,
    paddingVertical: 2,
    backgroundColor: GlobalColor.blue,
    borderRadius: 7,
  },
  text: {
    textAlign: "center",
    marginVertical: 6,
    color: "white",
  },
});
