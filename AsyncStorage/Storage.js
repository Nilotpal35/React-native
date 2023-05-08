import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeAsyncStorageData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    //console.log("DATA STORED SUCCESSFULLY");
  } catch (error) {
    console.log("SOME ISSUE IN STORING", error);
  }
};

export const getAsyncStorageData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    //console.log("DATA RETRIVED SUCCESSFULLY", data);
    return data;
  } catch (error) {
    console.log("SOME ISSUE IN GETTING DATA", error);
  }
};

export const clearAsyncStorageData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    //console.log("DATA CLEEARED");
  } catch (e) {
    console.log("ERROR IN REMOVING", e);
  }
};
