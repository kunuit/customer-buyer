import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import RoundedButton from "./RoundedButton";

const ButtonBack = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <RoundedButton
        mode='contained'
        onPress={() => navigation.goBack()}
        style={styles.buttonItem}>
        <Ionicons name='ios-return-up-back' size={35} color='black' />
      </RoundedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 15,
    left: 18,
  },
  buttonItem: {
    borderWidth: 0,
  },
});

export default ButtonBack;
