import React, { useState } from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { theme } from "../../../common/theme";
import Background from "../../../components/auth.components/Background";
import ButtonBack from "../../../components/ButtonBack";
import Button from "../../../components/Button";
import TextInput from "../../../components/TextInput";
import TitleScreen from "../../../components/TitleScreen";
import SelectItem from "../../../components/SelectItem";

const CreateProduct = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const [price, setPrice] = useState({ value: "", error: "" });
  const [height, setHeight] = useState({ value: "", error: "" });
  const [weight, setWeight] = useState({ value: "", error: "" });
  const [category, setCategory] = useState({ value: "", error: "" });
  const [parent, setParent] = useState({ value: "", error: "" });
  const [supplier, setSupplier] = useState({ value: "", error: "" });

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
          label='Description'
          returnKeyType='next'
          value={description.value}
          onChangeText={(text) => setDescription({ value: text, error: "" })}
          error={!!description.error}
          errorText={description.error}
        />

        <TextInput
          label='Price'
          returnKeyType='done'
          value={price.value}
          onChangeText={(text) => setPrice({ value: text, error: "" })}
          keyboardType='phone-pad'
          error={!!price.error}
          errorText={price.error}
          secureTextEntry
        />

        <TextInput
          label='Height'
          returnKeyType='done'
          value={height.value}
          onChangeText={(text) => {
            setHeight({ value: text, error: "" });
          }}
          keyboardType='phone-pad'
          error={!!height.error}
          errorText={height.error}
        />

        <TextInput
          label='Weight'
          returnKeyType='done'
          value={weight.value}
          onChangeText={(text) => setWeight({ value: text, error: "" })}
          keyboardType='phone-pad'
          error={!!weight.error}
          errorText={weight.error}
        />

        <SelectItem
          data={[
            { name: "book", value: "1" },
            { name: "food", value: "2" },
          ]}
          title='Category'
          value={category.value}
          onChangeValue={(e) => setCategory({ value: e, error: "" })}
          error={!!category.error}
          errorText={category.error}
        />

        <SelectItem
          data={[
            { name: "apple fresh", value: "1" },
            { name: "banana length", value: "2" },
          ]}
          title='Parent'
          enabled={category.value == "" ? false : true}
          value={parent.value}
          onChangeValue={(e) => setParent({ value: e, error: "" })}
          error={!!parent.error}
          errorText={parent.error}
        />

        <SelectItem
          data={[
            { name: "kong", value: "1" },
            { name: "kun", value: "2" },
          ]}
          title='Supplier'
          value={supplier.value}
          onChangeValue={(e) => setSupplier({ value: e, error: "" })}
          error={!!supplier.error}
          errorText={supplier.error}
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

export default CreateProduct;
