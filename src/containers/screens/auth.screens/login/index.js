import React, { memo, useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Background from "../../../../components/auth.components/Background";
import Logo from "../../../../components/Logo";
import Header from "../../../../components/Header";
import Button from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import { theme } from "../../../../common/theme";
import {
  infoValidator,
  passwordValidator,
} from "../../../../common/validation";

import {
  loginACT,
  loginGoogleACT,
  loginViaFirebaseACT,
} from "../../../../actions/auth.action";
import TextError from "../../../../components/TextError";
import { showToast } from "../../../../common/Layout/toast.helper";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const { errorLogin, isAuthLoading, isLogin } = useSelector(
    (state) => state.auth
  );

  const _onLoginPressed = () => {
    const emailError = infoValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    //! dispatch to check loginACT
    // dispatch(loginACT({ info: email.value, password: password.value }));

    //! dispatch to login via Firebase
    dispatch(
      loginViaFirebaseACT({ email: email.value, password: password.value })
    );
  };

  const _onGoogleLoginPressed = () => {
    showToast({
      title: "Sign in",
      type: "info",
      message: "Sorry can not do it",
    });
  };

  if (isLogin) {
    navigation.navigate("Bottom tab");
  }

  return (
    <Background isButtonBack={true} navigation={navigation}>
      <Logo />

      <Header>Welcome back.</Header>

      {errorLogin ? <TextError error={errorLogin} /> : <></>}

      <TextInput
        label="Email or Username"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        style={{ backgroundColor: theme.colors.primary }}
        onPress={_onLoginPressed}
        disabled={isAuthLoading}
      >
        {isAuthLoading ? (
          <ActivityIndicator
            style={{ opacity: 1 }}
            animating={true}
            size="small"
            color="#fff"
          />
        ) : (
          <Text style={styles.text}>Login</Text>
        )}
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        style={{ backgroundColor: theme.colors.placeholder }}
        onPress={_onGoogleLoginPressed}
      >
        <Text>Google Sign-In</Text>
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
    fontFamily: "gilroy-light",
  },
  link: {
    color: theme.colors.primary,
    fontFamily: "gilroy-bold",
  },
  text: {
    fontFamily: "gilroy-bold",
    fontSize: 15,
    color: theme.backgrounds.white,
  },
});

export default memo(LoginScreen);
