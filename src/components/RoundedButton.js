import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from "../constants/colors";
const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.button, props.style]}>
        <Text style={{ textAlign: "center" }}>{props.children}</Text>
      </View>
    </TouchableOpacity>
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
