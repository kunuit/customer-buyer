import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { theme } from "../common/theme";
import RoundedButton from "./RoundedButton";

const ButtonBack = ({ navigation, isBackground = false }) => {
  return (
    <View
      style={[
        styles.root,
        isBackground
          ? {
              backgroundColor: theme.backgrounds.buttonBack,
            }
          : {},
      ]}>
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
    padding: 5,
    borderRadius: 25,
  },
  buttonItem: {
    borderWidth: 0,
  },
});

export default memo(ButtonBack);
