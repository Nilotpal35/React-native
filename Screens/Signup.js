import { useContext, useState } from "react";
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
import { createUser } from "../util/auth";
import LoadingOverlay from "../Components/LoadingOverlay";
import { AuthContext } from "../Store/context/AuthContext";
import { Screen, BackgroundImage } from "react-native-screens";
import SignUpForm from "../Components/UI/SignUpForm";

const Signup = ({ route, navigation }) => {
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [email, setEmail] = useState("");
  const [cnfEmail, setCnfEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfPassword] = useState("");

  const authCtx = useContext(AuthContext);

  async function formValidate() {
    const emailCorrect = email.includes("@") && email === cnfEmail;
    const pwdCorrect = password.length > 6 && password === cnfpassword;

    if (emailCorrect && pwdCorrect) {
      try {
        setIsCreatingUser(true);
        const token = await createUser(email, password);
        authCtx.logIn(token);
      } catch (error) {
        Alert.alert("SIGNP", error.code);
      }
      setIsCreatingUser(false);
    } else {
      Alert.alert("Form", "please fill all the fields!", [
        { style: "destructive", text: "Go back" },
      ]);
    }
  }

  if (isCreatingUser) {
    return <LoadingOverlay message="Creating user..." />;
  }

  const formData = {
    email: email,
    cnfEmail: cnfEmail,
    setEmail: setEmail,
    setCnfEmail: setCnfEmail,
    password: password,
    cnfpassword: cnfpassword,
    setPassword: setPassword,
    setCnfPassword: setCnfPassword,
    formValidate: formValidate,
    navigation: navigation,
    styles: styles,
  };

  return <SignUpForm {...formData} />;
};

export default Signup;

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: 350,
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
