import { AsyncStorage } from "react-native";

export const setLocal = async (name, data) => {
  try {
    await AsyncStorage.setItem(name, JSON.stringify(data));
  } catch (error) {
    console.log(error + "setLocal error");
  }
};

export const getLocal = async (name) => {
  try {
    return await AsyncStorage.getItem(name);
  } catch (error) {
    console.log(error + "getLocal error");
  }
};

export const removeLocal = async (name) => {
  try {
    return await AsyncStorage.removeItem(name);
  } catch (error) {
    console.log(error + "removeLocal error");
  }
};
