import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Text } from "react-native";
import Colors from "../constants/colors";
const Button = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={[styles.button, props.style]}>
        <Text style={{ textAlign: "center" }}>{props.children}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
    borderRadius: 14,
    color: "black",
    borderColor: Colors.grayWhite,
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default Button;
