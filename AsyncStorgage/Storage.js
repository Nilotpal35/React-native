import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export async function saveDataAsyncStorage(key, value) {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    Alert.alert("Failure", "Some issue in saving data");
  }
}

export async function retriveDataAsyncStorage(key) {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data) {
      return data;
    }
  } catch (e) {
    Alert.alert("Failure", "Some issue in retriving data");
  }
}

export async function deleteDataAsyncStorage(key) {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    Alert.alert("Failure", "Some issue in deleting data");
  }
}
