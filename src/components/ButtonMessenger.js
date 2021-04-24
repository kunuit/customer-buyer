import React from "react";
import { View, StyleSheet } from "react-native";
import RoundedButton from "./RoundedButton";
import { FontAwesome5, Zocial } from "@expo/vector-icons";
import { theme } from "../common/theme";

const ButtonMessenger = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <RoundedButton
        mode="contained"
        onPress={() => console.log("go to screen messenger")}
        style={styles.buttonItem}
      >
        <AntDesign name="message1" size={20} color={theme.colors.notBlack} />
      </RoundedButton>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    padding: 5,
    borderRadius: 25,
    backgroundColor: theme.backgrounds.buttonBack,
  },
  buttonItem: {
    borderWidth: 0,
  },
});

export default ButtonMessenger;
