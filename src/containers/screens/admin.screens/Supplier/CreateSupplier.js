import React, { useEffect, useState } from "react";
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
import PopUp from "../../../../components/Modal/PopUp";
import ImagePickerComponent from "../../../../components/admin.components/ImagePicker";
import AddImageComponent from "../../../../components/AddImageComponent";
import { typeSuppliers } from "../../../../sagas/supplier.saga";
import { useDispatch, useSelector } from "react-redux";

const CreateSupplier = ({ navigation, route }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const [phone, setPhone] = useState({ value: "", error: "" });
  const [address, setAddress] = useState({ value: "", error: "" });
  const [images, setImages] = useState([]);
  const [representative, setRePresentative] = useState({
    value: "",
    error: "",
  });
  const [visible, setVisible] = useState(false);

  const { isCreatedOrUpdatedOrDeletedSupplier } = useSelector(
    (state) => state.suppliers
  );

  const dispatch = useDispatch();
  const item = route.params;

  useEffect(() => {
    addItem();
  }, [item]);

  useEffect(() => {
    if (isCreatedOrUpdatedOrDeletedSupplier) {
      dispatch({ type: typeSuppliers.resetCreateSupplier });
      navigation.navigate("Bottom tab");
    }
  }, [isCreatedOrUpdatedOrDeletedSupplier]);

  const AddImage = (uri) => {
    setVisible(false);
    setImages([...images, uri]);
  };

  const addItem = () => {
    if (item) {
      console.log(`item item supplier`, item);
      setName({ value: item.name, error: "" });
      setEmail({ value: item.email, error: "" });
      setPhone({ value: item.phone, error: "" });
      setAddress({ value: item.address, error: "" });
      setRePresentative({ value: item.representation, error: "" });
    }
  };

  const createNewSupplier = () => {
    dispatch({
      type: item
        ? typeSuppliers.updateSupplierFirebase
        : typeSuppliers.createSupplierFirebase,
      payload: {
        data: {
          id: item ? item.id : Math.floor(Math.random() * 100000 + 1),
          name: name.value,
          // description: description.value,
          email: email.value,
          phone: phone.value,
          address: address.value,
          representative: representative.value,
          images: [
            "https://www.pinclipart.com/picdir/big/150-1502916_logistics-and-supply-chain-management-fletes-clipart.png",
            "https://www.clipartkey.com/mpngs/m/172-1724766_transparent-supply-chain-management-icon.png",
          ],
          status: 0,
        },
      },
    });
  };

  return (
    <View style={styles.root}>
      <TitleScreen title="Create Supplier" />
      <ButtonBack navigation={navigation} />

      <Background>
        <AddImageComponent
          images={images}
          onAddImage={() => setVisible(true)}
        />

        <TextInput
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: "" })}
          error={!!name.error}
          errorText={name.error}
        />

        <TextInput
          label="Email"
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
          label="Description"
          returnKeyType="done"
          value={description.value}
          onChangeText={(text) => setDescription({ value: text, error: "" })}
          error={!!description.error}
          errorText={description.error}
        />

        <TextInput
          label="Phone"
          returnKeyType="done"
          value={phone.value}
          onChangeText={(text) => {
            setPhone({ value: text, error: "" });
          }}
          keyboardType="phone-pad"
          error={!!phone.error}
          errorText={phone.error}
        />

        <TextInput
          label="Address"
          returnKeyType="done"
          value={address.value}
          onChangeText={(text) => setAddress({ value: text, error: "" })}
          error={!!address.error}
          errorText={address.error}
        />

        <TextInput
          label="Representative"
          returnKeyType="done"
          value={representative.value}
          onChangeText={(text) => setRePresentative({ value: text, error: "" })}
          error={!!representative.error}
          errorText={representative.error}
        />

        <Button
          mode="contained"
          style={{ backgroundColor: theme.colors.primary }}
          onPress={() => createNewSupplier()}
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
          <Text style={styles.text}>{item ? "Update" : "Create"}</Text>
          {/* )} */}
        </Button>
      </Background>
      <PopUp visible={visible} closedVisible={() => setVisible(false)}>
        <ImagePickerComponent onImage={(e) => AddImage(e)} />
      </PopUp>
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
