import axios from "axios";
import { useContext } from "react";
import { Alert } from "react-native";
import { AuthContext } from "../Store/Context/AuthContext";
import { saveDataAsyncStorage } from "../AsyncStorgage/Storage";

const API_KEY = "AIzaSyDNV23bTv7HFSr8f3w34csHOdL4I4_NLJA";

const authenticate = async (mode, email, password) => {
  try {
    const response = await axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`,
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    );
    console.log("RESPONSE - DATA", response.data);
    return response.data;
  } catch (e) {
    Alert.alert("AUTHENTICATE ", e.message);
  }
};

export async function createUser(email, password) {
  console.log("create user", email, password);
  return await authenticate("signUp", email, password);
}

export async function validateUser(email, password) {
  console.log("create user", email, password);
  return await authenticate("signInWithPassword", email, password);
}

export async function reLogin(refreshToken) {
  try {
    const response = await axios.post(
      `https://securetoken.googleapis.com/v1/token?key=${API_KEY}`,
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }
    );
    const { id_token, refresh_token } = response.data;
    return response.data;
  } catch (error) {
    console.error("ERROR IN RELOGIN", error.message);
  }
  return null;
}
