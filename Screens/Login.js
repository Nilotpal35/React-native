import { useCallback, useContext, useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../Colors/colors";
import { loginUser } from "../util/auth";
import LoadingOverlay from "../Components/LoadingOverlay";
import { AuthContext } from "../Store/context/AuthContext";
import LoginForm from "../Components/UI/LoginForm";

const Login = ({ route, navigation }) => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);

  async function valiateLogin() {
    const emailCorrect = email.includes("@");
    const pwdCorrect = password.length > 7;

    if (emailCorrect && pwdCorrect) {
      try {
        setIsAuthenticating(true);
        const token = await loginUser(email, password);
        authCtx.logIn(token);
      } catch (error) {
        Alert.alert("LOGIN", error.code);
      }
      setIsAuthenticating(false);
    } else {
      Alert.alert("Warning", "Please fill email and password!", [
        { style: "destructive", text: "Go back" },
      ]);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Validatin user..." />;
  }

  const formData = {
    email: email,
    setEmail: setEmail,
    password: password,
    setPassword: setPassword,
    valiateLogin: valiateLogin,
    navigation: navigation,
    styles: styles,
  };

  return <LoginForm {...formData} />;
};

export default Login;

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    //backgroundColor: "rgba(0,0,0,0.8)",
  },
  formContainer: {
    width: 350,
    //paddingTop: 20,
    borderRadius: 9,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    overflow: "hidden",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  emailPwdContainer: {
    //backgroundColor: "red",
    marginVertical: 10,
  },
  emailPwd: {
    textAlign: "center",
    fontWeight: "bold",
    color: GlobalStyles.lightGrey,
    padding: 8,
  },
  emailPwdInput: {
    marginHorizontal: 20,
    borderWidth: 1,
    fontSize: 17,
    padding: 8,
    backgroundColor: GlobalStyles.lightGrey,
    borderRadius: 7,
    fontWeight: "500",
    color: "purple",
  },
  btnContainer: {
    margin: 20,
    paddingVertical: 7,
    borderRadius: 7,
    backgroundColor: GlobalStyles.cherrish,
  },
  btnText: {
    fontSize: 13,
    fontWeight: 500,
    textAlign: "center",
    color: "white",
  },
  linkText: {
    fontSize: 14,
    fontWeight: 400,
    marginVertical: 10,
    marginBottom: 20,
    //padding: 10,
    textAlign: "center",
    color: "white",
  },
});
