import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { theme } from "../../common/theme";
import Button from "../Button";
import Colors from "../../constants/colors";

const ButtonContainer = ({ onAddToCart, ...props }) => {
  return (
    <Button mode="contained" onPress={() => onAddToCart()} {...props}>
      <Text style={styles.buttonText}>Add To Cart</Text>
    </Button>
  );
};
const styles = StyleSheet.create({
  buttonText: {
    fontFamily: "gilroy-bold",
    fontSize: 15,
    color: theme.backgrounds.white,
  },
});

export default ButtonContainer;
