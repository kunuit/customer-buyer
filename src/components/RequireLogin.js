import React from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { theme } from "../common/theme";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";

export default function RequireLogin() {
  const navigationTest = useNavigation();
  return (
    <View style={styles.root}>
      <Text>Please login at here</Text>
      <Button
        mode="container"
        onPress={() => navigationTest.navigate("LoginScreen")}
        style={{ backgroundColor: theme.colors.primary }}
      >
        <Text style={{ color: theme.backgrounds.white }}>Log in</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    // backgroundColor: "red",
    flex: 1,
    // position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
});
