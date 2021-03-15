import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CartItem from "./src/components/CartItem";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    "gilroy-light": require("./assets/fonts/Gilroy-Light.otf"),
    "gilroy-bold": require("./assets/fonts/Gilroy-ExtraBold.otf"),
  });
  if (!fontsLoaded) return <View />;
  return (
    <View style={styles.container}>
      <CartItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
