import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useDispatch } from "react-redux";

import { theme } from "../../common/theme";
import Button from "../Button";
import { logoutACT } from "../../actions/auth.action.js";

const ButtonLogOut = () => {
  const dispatch = useDispatch();
  return (
    <View style={styles.buttonLogOutContainer}>
      <Button
        style={{ backgroundColor: theme.backgrounds.paper }}
        onPress={() => {
          dispatch(logoutACT());
        }}>
        <View style={styles.buttonLogOut}>
          <Icon
            name='md-log-out-outline'
            size={25}
            color={theme.colors.primary}
          />
          <Text style={styles.text}>Log Out</Text>
          <Icon
            name='md-log-out-outline'
            size={25}
            color={theme.backgrounds.paper}
          />
        </View>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLogOutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  buttonLogOut: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontFamily: "gilroy-bold",
    fontSize: 15,
    color: theme.colors.primary,
  },
});

export default ButtonLogOut;
