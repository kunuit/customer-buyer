import React, { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../../../../components/auth.components/Background';
import Logo from '../../../../components/Logo';
import Header from '../../../../components/Header';
import Button from '../../../../components/Button';
import TextInput from '../../../../components/TextInput';
// import BackButton from '../components/BackButton';
import { theme } from '../../../../common/theme';
// import { Navigation } from '../types';
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from '../../../../common/validation';

// type Props = {
//   navigation: Navigation,
// };

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Background>

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        label='Name'
        returnKeyType='next'
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label='Email'
        returnKeyType='next'
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
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
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button
        mode='contained'
        style={{ backgroundColor: theme.colors.primary }}
        onPress={_onSignUpPressed}>
          <Text style={styles.text}>
            Sign Up
          </Text>
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
    fontFamily: 'gilroy-light',
  },
  text: {
    fontFamily: 'gilroy-bold',
    fontSize: 15,
    color: theme.backgrounds.white,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontFamily: 'gilroy-bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
