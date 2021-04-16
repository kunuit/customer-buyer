import React, { useEffect, useState } from "react";
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
import { typeCarts } from "../../sagas/cart.saga";
import { typeFavorites } from "../../sagas/favorite.saga";

const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(1);

  const { isAdminLogin } = useSelector((state) => state.auth);
  const { isCreatedOrUpdatedOrDeletedProduct } = useSelector(
    (state) => state.products
  );
  const listFavorite = useSelector((state) => state.favorites);

  const item = route.params;
  const [heart, setHeart] = useState(
    listFavorite.data.some((itemFavorite) => itemFavorite.id == item.id)
  );

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

  const handleAddToCart = () => {
    dispatch({
      type: typeCarts.addtoCart,
      payload: {
        data: item,
        quantity: productCount,
      },
    });
  };

  const handleSetFavorite = () => {
    console.log(heart);
    setHeart(!heart);
    dispatch({
      type: heart
        ? typeFavorites.inactiveFavoriteProduct
        : typeFavorites.activeFavoriteProduct,
      payload: {
        data: item,
      },
    });
  };

  return (
    <View style={styles.productDetailContainer}>
      <StatusBar
        animated={true}
        backgroundColor={theme.backgrounds.itemImageDetail}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductDetailImageContainer images={item.images} />
        <View style={styles.productDetailInfoContainer}>
          <ProductUnitContainer
            title={item.name}
            isEdit={isAdminLogin ? true : false}
            upDateProduct={redirect}
            heart={heart}
            onSetFavorite={() => handleSetFavorite()}
          />
          <QuantityAjustContainer
            productCount={productCount}
            onSetProductCount={(productCounted) =>
              setProductCount(productCounted)
            }
            price={item.price}
            isEdit={isAdminLogin ? true : false}
          />
          <DescriptionContainer description={item.description} />
          <NutritionContainer />
          <ReviewContainer />
        </View>
      </ScrollView>
      <ButtonBottomAdmin
        navigation={navigation}
        onDeletedProduct={handleDeletedProduct}
        isAdmin={isAdminLogin}
      />
      {isAdminLogin ? <></> : <ButtonContainer onAddToCart={handleAddToCart} />}
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
