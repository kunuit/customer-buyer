import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../common/theme";

const TextError = (props) => {
  const { error } = props;
  return (
    <View style={styles.root}>
      <Text style={styles.text}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: theme.colors.error,
    fontFamily: "gilroy-light",
  },
});

export default TextError;
