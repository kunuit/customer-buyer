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
import ButtonMessenger from "../../components/ButtonMessenger";
import MainLoading from "../../components/Loader/MainLoading";
import { Text } from "react-native";
import { windowWidth } from "../../common/Dimensions";

const ProductDetail = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(1);
  const [item, setItem] = useState(route.params);
  const { isAdminLogin } = useSelector((state) => state.auth);
  const { isLoadingAddToCart } = useSelector((state) => state.carts);
  const {
    isLoadingProductDetail,
    isCreatedOrUpdatedOrDeletedProduct,
    currentProduct,
  } = useSelector((state) => state.products);
  // const listFavorite = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch({
      type: typeProducts.fetchOneProduct,
      payload: {
        productId: item._id,
      },
    });
  }, []);

  const [heart, setHeart] = useState(item.favorited);

  useEffect(() => {
    if (currentProduct) {
      setItem(currentProduct);
      setHeart(currentProduct.favorited);
    }
  }, [currentProduct]);

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
      type: typeProducts.removeProduct,
      payload: {
        data: item._id,
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
      {isLoadingProductDetail && item._id != route.params._id ? (
        <MainLoading padding={30} />
      ) : (
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ProductDetailImageContainer images={item.imageUrls} />
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
          {/* {isAdminLogin ? <></> : <ButtonMessenger navigation={navigation} />} */}
          <View style={{ alignItems: "center" }}>
            {!isAdminLogin && (
              <ButtonContainer
                disabled={isLoadingAddToCart}
                style={{
                  backgroundColor: isLoadingAddToCart
                    ? theme.colors.notGray
                    : theme.colors.primary,
                  width: windowWidth * 0.9,
                }}
                onAddToCart={handleAddToCart}
              />
            )}
          </View>
          <ButtonBack navigation={navigation} isBackground={true} />
        </View>
      )}
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
