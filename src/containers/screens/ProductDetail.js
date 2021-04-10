import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  StatusBar,
} from "react-native";

import ProductDetailImageContainer from "../../components/productDetail.component/ProductDetailImageContainer";
import ProductUnitContainer from "../../components/productDetail.component/ProductUnitContainer";
import QuantityAjustContainer from "../../components/productDetail.component/QuantityAjustContainer";
import DescriptionContainer from "../../components/productDetail.component/DescriptionContainer";
import NutritionContainer from "../../components/productDetail.component/NutritionContainer";
import ReviewContainer from "../../components/productDetail.component/ReviewContainer";
import ButtonContainer from "../../components/productDetail.component/ButtonContainer";
import ButtonBottomAdmin from "../../components/admin.components/ButtonBottomAdmin";
import { useSelector } from "react-redux";
import ButtonBack from "../../components/ButtonBack";
import { theme } from "../../common/theme";

const ProductDetail = ({ navigation, route }) => {
  const { isAdminLogin } = useSelector((state) => state.auth);

  const item = route.params;

  return (
    <View style={styles.productDetailContainer}>
      <StatusBar
        animated={true}
        backgroundColor={theme.backgrounds.itemImageDetail}
        barStyle='dark-content'
        hidden={true}
      />
      <ScrollView>
        <ProductDetailImageContainer images={item.images} />
        <View style={styles.productDetailInfoContainer}>
          <ProductUnitContainer
            title={item.name}
            isEdit={isAdminLogin ? true : false}
          />
          <QuantityAjustContainer
            price={item.price}
            isEdit={isAdminLogin ? true : false}
          />
          <DescriptionContainer />
          <NutritionContainer />
          <ReviewContainer />
        </View>
      </ScrollView>
      {isAdminLogin ? <ButtonBottomAdmin /> : <ButtonContainer />}
      <ButtonBack navigation={navigation} isBackground={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  productDetailContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
  },
});

export default ProductDetail;
