import React, { useEffect, useState } from "react";
import { StatusBar, Text } from "react-native";
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
import AddImageComponent from "../../../../components/AddImageComponent";
import { Dimensions } from "react-native";
import { Modal } from "react-native-paper";
import { Animated } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { typeProducts } from "../../../../sagas/product.saga";
import PopUp from "../../../../components/Modal/PopUp";
import { typeUpload } from "../../../../sagas/upload.saga";
import { ActivityIndicator } from "react-native";

const CreateProduct = ({ navigation, route }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [description, setDescription] = useState({ value: "", error: "" });
  const [price, setPrice] = useState({ value: "", error: "" });
  const [height, setHeight] = useState({ value: "", error: "" });
  const [weight, setWeight] = useState({ value: "", error: "" });
  const [category, setCategory] = useState({ value: "", error: "" });
  const [measure, setMeasure] = useState({ value: "", error: "" });
  const [parent, setParent] = useState({ value: "", error: "" });
  const [supplier, setSupplier] = useState({ value: "", error: "" });
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();

  const item = route.params;

  const categoryState = useSelector((state) => state.categories);
  const supplierState = useSelector((state) => state.suppliers);
  const { measures } = useSelector((state) => state.measures);
  const { isLoadingUpload } = useSelector((state) => state.uploads);
  const { isCreatedOrUpdatedOrDeletedProduct } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (isCreatedOrUpdatedOrDeletedProduct) {
      dispatch({ type: typeProducts.resetCreateProduct });
      navigation.navigate("Bottom tab");
    }
  }, [isCreatedOrUpdatedOrDeletedProduct]);

  useEffect(() => {
    if (images.length == 0) {
      dispatch({
        type: typeUpload.resetUrlProducts,
      });
    }
  }, [images]);

  const AddImage = (uri) => {
    console.log(uri, "check uri");
    dispatch({
      type: typeUpload.uploadImageProduct,
      payload: {
        data: uri,
      },
    });
    setVisible(false);
    setImages([...images, uri]);
  };

  const addItem = () => {
    console.log(`check item`, item);
    if (item) {
      setName({ value: item.name, error: "" });
      setDescription({ value: item.description, error: "" });
      setPrice({ value: item.price, error: "" });
      setHeight({ value: item.height ? item.height : "", error: "" });
      setWeight({ value: item.weight ? item.weight : "", error: "" });
      setCategory({ value: item.category._id, error: "" });
      setSupplier({ value: item.supplierId, error: "" });
      setMeasure({ value: item.measure._id, error: "" });
      setImages(item.imageUrls);
    }
  };

  useEffect(() => {
    addItem();
  }, [item]);

  const createNewProduct = async () => {
    dispatch({
      type: item ? typeProducts.updateProduct : typeProducts.createProduct,
      payload: {
        id: item ? item.id : null,
        data: {
          name: name.value,
          description: description.value,
          price: price.value,
          height: height.value,
          weight: weight.value,
          categoryId: category.value,
          imageUrls: item ? item.imageUrls : null,
          measureId: measure.value,
          // supplierId: supplier.value,
          // status: 0,
        },
      },
    });
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
    // let formData = new FormData();

    // for (let uri of images) {
    //   let filename = uri.split("/").pop();

    //   // Infer the type of the image
    //   let match = /\.(\w+)$/.exec(filename);
    //   let type = match ? `image/${match[1]}` : `image`;

    //   // Assume "photo" is the name of the form field the server expects
    //   formData.append("images", { uri: uri, name: filename, type });
    // }

    // formData.append("name", name.value);
    // formData.append("price", price.value);
    // formData.append("description", description.value);
    // formData.append("categoryId", "605460a10626006fe5dcab41");
    // formData.append("measureId", "605460b10626006fe5dcab42");

    // console.log(formData);
    // try {
    //   const data = await addProductAPITest(formData);
    //   console.log(data, "Check data res");
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <View style={styles.root}>
      <TitleScreen title="Create Product" />
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
          label="Description"
          returnKeyType="next"
          value={description.value}
          onChangeText={(text) => setDescription({ value: text, error: "" })}
          error={!!description.error}
          errorText={description.error}
        />

        <TextInput
          label="Price"
          returnKeyType="next"
          value={price.value + ""}
          onChangeText={(text) => setPrice({ value: text, error: "" })}
          keyboardType="phone-pad"
          error={!!price.error}
          errorText={price.error}
        />

        <TextInput
          label="Height"
          returnKeyType="next"
          value={height.value + ""}
          onChangeText={(text) => {
            setHeight({ value: text, error: "" });
          }}
          keyboardType="phone-pad"
          error={!!height.error}
          errorText={height.error}
        />

        <TextInput
          label="Weight"
          returnKeyType="next"
          value={weight.value + ""}
          onChangeText={(text) => setWeight({ value: text, error: "" })}
          keyboardType="phone-pad"
          error={!!weight.error}
          errorText={weight.error}
        />

        <SelectItem
          data={measures.map((e) => {
            return {
              name: e.description,
              value: e.id,
            };
          })}
          title="Measure"
          value={measure.value}
          onChangeValue={(e) => setMeasure({ value: e, error: "" })}
          error={!!measure.error}
          errorText={measure.error}
        />

        <SelectItem
          data={categoryState.data.map((e) => {
            return {
              name: e.name,
              value: e.id,
            };
          })}
          title="Category"
          value={category.value}
          onChangeValue={(e) => setCategory({ value: e, error: "" })}
          error={!!category.error}
          errorText={category.error}
        />

        <Button
          mode="contained"
          style={{ backgroundColor: theme.colors.primary }}
          onPress={() => createNewProduct()}
          disabled={isLoadingUpload}
        >
          {isLoadingUpload ? (
            <ActivityIndicator
              style={{ opacity: 1 }}
              animating={true}
              size="small"
              color="#fff"
            />
          ) : (
            <Text style={styles.text}>{item ? "Update" : "Create"}</Text>
          )}
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

export default CreateProduct;
