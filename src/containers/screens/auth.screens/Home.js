import React, { memo, useState } from "react";
import Background from "../../../components/auth.components/Background";
import Logo from "../../../components/Logo";
import Button from "../../../components/Button";
import { StyleSheet, Text } from "react-native";
import { theme } from "../../../common/theme";
import { useDispatch, useSelector } from "react-redux";
import {
  resetRegisterACT,
  switchIsAdminACT,
} from "../../../actions/auth.action";
import SwitchInput from "../../../components/SwitchInput";

const HomeScreen = ({ navigation }) => {
  const { isRegister, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onToggleSwitch = () => {
    dispatch(switchIsAdminACT());
  };

  return (
    <Background>
      <Logo />

      <Text
        style={{
          textAlign: "center",
          fontFamily: "gilroy-bold",
          paddingBottom: 20,
        }}>
        Get your groceries with nectar
      </Text>
      <Button
        mode='contained'
        style={{ backgroundColor: theme.colors.primary }}
        onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.text}>Login</Text>
      </Button>
      <Button
        mode='outlined'
        style={{ backgroundColor: theme.backgrounds.paper }}
        onPress={() => navigation.navigate("RegisterScreen")}>
        <Text style={[styles.text, { color: theme.colors.primary }]}>
          Register
        </Text>
      </Button>
      <SwitchInput name='Admin' value={isAdmin} handleSwitch={onToggleSwitch} />
    </Background>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "gilroy-bold",
    fontSize: 15,
    color: theme.backgrounds.white,
  },
});

export default memo(HomeScreen);
