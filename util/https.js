import axios from "axios";
import { Alert } from "react-native";

const firebaseUrl = "https://expense-tracker-c7c13-default-rtdb.firebaseio.com";

export async function getData(authToken, endpoint) {
  if (authToken) {
    try {
      const response = await axios.get(
        `${firebaseUrl}/${endpoint}.json/?auth=${authToken}`
      );
      const item = JSON.stringify(response.data);
      console.log("RESPONSE- DATA ", JSON.parse(item));
      return response.data;
    } catch (error) {
      Alert.alert("HTTP", error.code);
    }
  }
}
