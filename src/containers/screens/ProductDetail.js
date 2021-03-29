import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

import ProductDetailImageContainer from "../../components/productDetail.component/ProductDetailImageContainer";
import ProductUnitContainer from "../../components/productDetail.component/ProductUnitContainer";
import QuantityAjustContainer from "../../components/productDetail.component/QuantityAjustContainer";
import DescriptionContainer from "../../components/productDetail.component/DescriptionContainer";
import NutritionContainer from "../../components/productDetail.component/NutritionContainer";
import ReviewContainer from "../../components/productDetail.component/ReviewContainer";
import ButtonContainer from "../../components/productDetail.component/ButtonContainer";

const ProductDetail = () => {
  return (
    <View style={styles.productDetailContainer}>
      <ScrollView>
        <ProductDetailImageContainer />
        <View style={styles.productDetailInfoContainer}>
          <ProductUnitContainer />
          <QuantityAjustContainer />
          <DescriptionContainer />
          <NutritionContainer />
          <ReviewContainer />
        </View>
      </ScrollView>
      <ButtonContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  productDetailContainer: {
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
    alignItems: "center",
    paddingBottom: Dimensions.get("window").height * 0.09 + 37,
  },
});

export default ProductDetail;
