import React from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { theme } from "../common/theme";
import ButtonBack from "./ButtonBack";

const TitleScreen = ({ title, isBorder = true, navigation }) => {
  return (
    <View
      style={[
        styles.titleTextContainer,
        { borderBottomWidth: isBorder ? 1 : 0 },
      ]}
    >
      <Text style={styles.titleText}>{title}</Text>
      {navigation ? (
        <ButtonBack stylesButtonBack={{ top: 10 }} navigation={navigation} />
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  titleTextContainer: {
    width: "100%",
    borderBottomColor: theme.colors.lineBorder,

    backgroundColor: theme.backgrounds.white,
    paddingVertical: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "gilroy-bold",
  },
});

export default TitleScreen;
