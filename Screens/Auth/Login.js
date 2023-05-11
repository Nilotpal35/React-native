import { Alert, StyleSheet, View } from "react-native";
import { GlobalColor } from "../../Colors/GlobalStyles";
import LoginForm from "../../Components/Form/LoginForm";
import { useCallback, useContext, useState } from "react";
import { validateUser } from "../../util/http";
import { AuthContext } from "../../Store/Context/AuthContext";

export default function LogIn({ route, navigation }) {
  const [email, setEmail] = useState("");
  const [passWord, setPassword] = useState("");
  const authCtx = useContext(AuthContext);

  async function formValidation() {
    const emailValidate = email.includes("@");
    const pwdValidate = passWord.length > 6;

    if (emailValidate && pwdValidate) {
      try {
        const { idToken, refreshToken } = await validateUser(email, passWord);
        console.log("fetched Token ", idToken, refreshToken);
        if (idToken) {
          authCtx.logIn(idToken, refreshToken);
        }
      } catch (e) {
        Alert.alert("LOGIN TOKEN error", e.message);
      }
    } else {
      Alert.alert("Warning ", "Fill all the fields properly");
    }
  }

  const formData = {
    email: email,
    setEmail: setEmail,
    passWord: passWord,
    setPassword: setPassword,
    formValidation: formValidation,
    styles: styles,
    navigation: navigation,
  };
  return (
    <View style={styles.rootContainer}>
      <LoginForm {...formData} />
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
