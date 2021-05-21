import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Switch } from "react-native-paper";
import { theme } from "../common/theme";

const SwitchInput = (props) => {
  const { name, value, handleSwitch } = props;

  return (
    <View style={styles.root}>
      {name ? <Text style={styles.text}>{name}</Text> : <></>}
      <Switch
        value={value}
        onValueChange={handleSwitch}
        color={theme.colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontFamily: "gilroy-bold",
  },
});

export default memo(SwitchInput);
