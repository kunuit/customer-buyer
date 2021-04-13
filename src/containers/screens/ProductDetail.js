import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";

import ProductDetailImageContainer from "../../components/productDetail.component/ProductDetailImageContainer";
import ProductUnitContainer from "../../components/productDetail.component/ProductUnitContainer";
import QuantityAjustContainer from "../../components/productDetail.component/QuantityAjustContainer";
import DescriptionContainer from "../../components/productDetail.component/DescriptionContainer";
import NutritionContainer from "../../components/productDetail.component/NutritionContainer";
import ReviewContainer from "../../components/productDetail.component/ReviewContainer";
import ButtonContainer from "../../components/productDetail.component/ButtonContainer";
import ButtonBottomAdmin from "../../components/admin.components/ButtonBottomAdmin";
import { useDispatch, useSelector } from "react-redux";
import ButtonBack from "../../components/ButtonBack";
import { theme } from "../../common/theme";
import { typeProducts } from "../../sagas/product.saga";

const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const { isAdminLogin } = useSelector((state) => state.auth);
  const { isCreatedOrUpdatedOrDeletedProduct } = useSelector(
    (state) => state.products
  );

  const item = route.params;

  useEffect(() => {
    if (isCreatedOrUpdatedOrDeletedProduct) {
      dispatch({ type: typeProducts.resetCreateProduct });
      navigation.navigate("Bottom tab");
    }
  }, [isCreatedOrUpdatedOrDeletedProduct]);

  const redirect = () => {
    navigation.navigate("Create Product", item);
  };

  const handleDeletedProduct = () => {
    dispatch({
      type: typeProducts.removeProductFirebase,
      payload: {
        index: item.id,
      },
    });
  };

  return (
    <View style={styles.productDetailContainer}>
      <StatusBar
        animated={true}
        backgroundColor={theme.backgrounds.itemImageDetail}
        barStyle="dark-content"
        hidden={true}
      />
      <ScrollView>
        <ProductDetailImageContainer images={item.images} />
        <View style={styles.productDetailInfoContainer}>
          <ProductUnitContainer
            title={item.name}
            isEdit={isAdminLogin ? true : false}
            upDateProduct={redirect}
          />
          <QuantityAjustContainer
            price={item.price}
            isEdit={isAdminLogin ? true : false}
          />
          <DescriptionContainer description={item.description} />
          <NutritionContainer />
          <ReviewContainer />
        </View>
      </ScrollView>
      {isAdminLogin ? (
        <ButtonBottomAdmin onDeletedProduct={handleDeletedProduct} />
      ) : (
        <ButtonContainer />
      )}
      <ButtonBack navigation={navigation} isBackground={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  productDetailContainer: {
    flex: 1,
    backgroundColor: "#fff",
    // width: "100%",
    alignItems: "center",
  },
});

export default ProductDetail;
