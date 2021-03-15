import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import Colors from "../../constants/colors";
const Button = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.button}>{props.children}</View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    color: "black",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderColor: Colors.gray,
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default Button;
