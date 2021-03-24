import React, { memo } from "react";
import Background from "../../../components/auth.components/Background";
import Logo from "../../../components/Logo";
import Button from "../../../components/Button";
import { StyleSheet, Text } from "react-native";
import { theme } from "../../../common/theme";
import { useDispatch, useSelector } from "react-redux";
import { resetRegisterACT } from "../../../actions/auth.action";

const HomeScreen = ({ navigation }) => {
  const { isRegister } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // if (isRegister) {
  //   dispatch(resetRegisterACT());
  // }

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
