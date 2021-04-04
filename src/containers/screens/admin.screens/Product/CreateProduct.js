import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { theme } from "../../../../common/theme";
import Background from "../../../../components/auth.components/Background";
import ButtonBack from "../../../../components/ButtonBack";
import Button from "../../../../components/Button";
import TextInput from "../../../../components/TextInput";
import TitleScreen from "../../../../components/TitleScreen";
import SelectItem from "../../../../components/SelectItem";
import ImagePickerComponent from "../../../../components/admin.components/ImagePicker";
import { addProductAPITest } from "../../../../apis/product.api";
import AddImageComponent from "../../../../components/AddImageComponent";
import { Dimensions } from "react-native";
import { Provider, Portal, Modal } from "react-native-paper";
import { Animated } from "react-native";

const CreateProduct = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const [price, setPrice] = useState({ value: "", error: "" });
  const [height, setHeight] = useState({ value: "", error: "" });
  const [weight, setWeight] = useState({ value: "", error: "" });
  const [category, setCategory] = useState({ value: "", error: "" });
  const [parent, setParent] = useState({ value: "", error: "" });
  const [supplier, setSupplier] = useState({ value: "", error: "" });
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalY, setModalY] = useState(
    new Animated.Value(Dimensions.get("window").height * 0.1),
  );

  const AddImage = (uri) => {
    setVisible(false);
    setImages([...images, uri]);
  };

  useEffect(() => {
    if (visible == true) {
      setVisibleModal(true);
      openModal();
    }
    if (visible == false) {
      setTimeout(() => {
        setVisibleModal(false);
      }, 500);
      closeModal();
    }
  }, [visible]);

  const openModal = () => {
    Animated.timing(modalY, {
      duration: 1000,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalY, {
      duration: 1000,
      toValue: Dimensions.get("window").height * 0.1,
      useNativeDriver: true,
    }).start();
  };

  const createNewProduct = async () => {
    // console.log(
    //   {
    //     name: name.value,
    //     description: description.value,
    //     price: price.value,
    //     // height,
    //     // weight,
    //     // category,
    //     // supplier,
    //     images,
    //   },
    //   "check data create product",
    // );

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();

    for (let uri of images) {
      let filename = uri.split("/").pop();

      // Infer the type of the image
      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      // Assume "photo" is the name of the form field the server expects
      formData.append("images", { uri: uri, name: filename, type });
    }

    formData.append("name", name.value);
    formData.append("price", price.value);
    formData.append("description", description.value);
    formData.append("categoryId", "605460a10626006fe5dcab41");
    formData.append("measureId", "605460b10626006fe5dcab42");

    console.log(formData);
    // try {
    //   const data = await addProductAPITest(formData);
    //   console.log(data, "Check data res");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <Provider>
      <View style={styles.root}>
        <TitleScreen>Create Product</TitleScreen>
        <ButtonBack navigation={navigation} />

        <Background>
          <AddImageComponent
            images={images}
            onAddImage={() => setVisible(true)}
          />

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
            onPress={() => createNewProduct()}
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

        <Portal>
          <Modal
            visible={visibleModal}
            onDismiss={() => setVisible(false)}
            contentContainerStyle={styles.containerStyle}>
            <Animated.View
              style={[styles.modal, { transform: [{ translateY: modalY }] }]}>
              <ImagePickerComponent onImage={(e) => AddImage(e)} />
            </Animated.View>
          </Modal>
        </Portal>
      </View>
    </Provider>
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
  modal: {
    height: Dimensions.get("window").height * 0.18,
    width: Dimensions.get("window").width,
    justifyContent: "flex-start",
    backgroundColor: theme.colors.notBlack,
    borderRadius: 25,
    justifyContent: "flex-start",
  },
  containerStyle: {
    marginBottom: -Dimensions.get("window").height * 0.78,
    height: Dimensions.get("window").height * 0.18,
  },
});

export default CreateProduct;
