import React, { useState } from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { theme } from "../../../../common/theme";
import Background from "../../../../components/auth.components/Background";
import ButtonBack from "../../../../components/ButtonBack";
import Button from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import TitleScreen from "../../../../components/TitleScreen";

const CreateSupplier = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });
  const [address, setAddress] = useState({ value: "", error: "" });
  const [representative, setRepresentative] = useState({
    value: "",
    error: "",
  });

  return (
    <View style={styles.root}>
      <TitleScreen>Create Supplier</TitleScreen>
      <ButtonBack navigation={navigation} />

      <Background>
        <TextInput
          label='Name'
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
          label='Description'
          returnKeyType='done'
          value={description.value}
          onChangeText={(text) => setDescription({ value: text, error: "" })}
          error={!!description.error}
          errorText={description.error}
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

        <TextInput
          label='Representative'
          returnKeyType='done'
          value={representative.value}
          onChangeText={(text) => setRePresentative({ value: text, error: "" })}
          error={!!representative.error}
          errorText={representative.error}
        />

        <Button
          mode='contained'
          style={{ backgroundColor: theme.colors.primary }}
          onPress={() => console.log("create new product")}
          // disabled={isAuthLoading}
        >
          {/* {false ? (
          <ActivityIndicator
          style={{ opacity: 1 }}
          animating={true}
          size='small'
          color='#fff'
          />
        ) : ( */}
          <Text style={styles.text}>Create</Text>
          {/* )} */}
        </Button>
      </Background>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "gilroy-bold",
    fontSize: 15,
    color: theme.backgrounds.white,
  },
  root: {
    backgroundColor: theme.backgrounds.white,
    height: "100%",
  },
});

export default CreateSupplier;
