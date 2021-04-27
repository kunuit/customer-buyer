import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { theme } from "../common/theme";
import Button from "./Button";

export default function RequireLogin({ navigation }) {
  return (
    <View style={styles.root}>
      <Text>Please login at here</Text>
      <Button
        mode="container"
        onPress={() => navigation.navigate("LoginScreen")}
        style={{ backgroundColor: theme.colors.primary }}
      >
        <Text style={{ color: theme.backgrounds.white }}>Log in</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
});
