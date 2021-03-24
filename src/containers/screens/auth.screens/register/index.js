import React, { memo, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Background from "../../../../components/auth.components/Background";
import Logo from "../../../../components/Logo";
import Header from "../../../../components/Header";
import Button from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
// import BackButton from '../components/BackButton';
import { theme } from "../../../../common/theme";
// import { Navigation } from '../types';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
  phoneValidator,
  addressValidator,
} from "../../../../common/validation";
import { useDispatch, useSelector } from "react-redux";
import { registerACT, resetRegisterACT } from "../../../../actions/auth.action";
import TextError from "../../../../components/TextError";

// type Props = {
//   navigation: Navigation,
// };

const RegisterScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });
  const [address, setAddress] = useState({ value: "", error: "" });

  const { errorRegister, isRegister, isAuthLoading } = useSelector(
    (state) => state.auth,
  );

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    const phoneError = phoneValidator(phone.value);
    const addressError = addressValidator(address.value);

    if (
      emailError ||
      passwordError ||
      nameError ||
      phoneError ||
      addressError
    ) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setPhone({ ...phone, error: phoneError });
      setAddress({ ...address, error: addressError });
      return;
    }

    dispatch(
      registerACT({
        username: name.value,
        email: email.value,
        password: password.value,
        phone: phone.value,
        addressDetail: address.value,
      }),
    );
  };

  if (isRegister) {
    navigation.goBack();
    dispatch(resetRegisterACT());
  }

  return (
    <Background>
      <Logo />

      <Header>Create Account</Header>

      {errorRegister != null ? <TextError error={errorRegister} /> : <></>}

      <TextInput
        label='Username'
        returnKeyType='next'
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label='Email'
        returnKeyType='next'
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        keyboardType='email-address'
      />

      <TextInput
        label='Password'
        returnKeyType='done'
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <TextInput
        label='Phone'
        returnKeyType='done'
        value={phone.value}
        onChangeText={(text) => {
          setPhone({ value: text, error: "" });
        }}
        keyboardType='phone-pad'
        error={!!phone.error}
        errorText={phone.error}
      />

      <TextInput
        label='Address'
        returnKeyType='done'
        value={address.value}
        onChangeText={(text) => setAddress({ value: text, error: "" })}
        error={!!address.error}
        errorText={address.error}
      />

      <Button
        mode='contained'
        style={{ backgroundColor: theme.colors.primary }}
        onPress={_onSignUpPressed}
        disabled={isAuthLoading}>
        {isAuthLoading ? (
          <ActivityIndicator
            style={{ opacity: 1 }}
            animating={true}
            size='small'
            color='#fff'
          />
        ) : (
          <Text style={styles.text}>Register</Text>
        )}
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
    fontFamily: "gilroy-light",
  },
  text: {
    fontFamily: "gilroy-bold",
    fontSize: 15,
    color: theme.backgrounds.white,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontFamily: "gilroy-bold",
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
