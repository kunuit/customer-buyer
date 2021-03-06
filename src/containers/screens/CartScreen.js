import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
} from "react-native";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import Colors from "../../constants/colors";
import { statusCart, typeCarts } from "../../sagas/cart.saga";
import MainLoading from "../../components/Loader/MainLoading";
import LottieView from "lottie-react-native";
import NumberFormat from "react-number-format";
import { theme } from "../../common/theme";
import { ActivityIndicator } from "react-native-paper";
import RequireLogin from "../../components/RequireLogin";

const Line = () => {
  return (
    <View
      style={{
        borderBottomColor: Colors.grayWhite,
        borderBottomWidth: 1,
      }}
    />
  );
};

const CartScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { isLoading, data, isloadingUpdateCart, listCheckOutId } = useSelector(
    (state) => state.carts
  );
  const { isLogin } = useSelector((state) => state.auth);
  const [refreshing, setRefreshing] = useState(false);
  const [showLoadingEditCheckList, setShowLoadingEditCheckList] =
    useState(false);
  console.log(`showLoadingEditCheckList`, showLoadingEditCheckList);
  //! huong giai quyet thi sẽ là tạo ra 1 function để quản lý listCheckOut
  console.log(listCheckOutId, "check check out state");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("run effect in cart screen");
    isLogin && data.length == 0 && dispatch({ type: typeCarts.fetchCart });
    setTotalPrice(0);
  }, [isLogin]);

  useEffect(() => {
    if (!isloadingUpdateCart) {
      console.log(`listCheckOutId`, listCheckOutId);
      console.log(`data`, data);
      updateListCheckOut();
      setShowLoadingEditCheckList(false);
    }
  }, [isloadingUpdateCart, listCheckOutId]);

  const updateListCheckOut = () => {
    const tmpPrice = listCheckOutId.reduce((acc, cur) => {
      const indexCheckout = data.findIndex((item) => item.id == cur);
      return (
        +data[indexCheckout].product.price * +data[indexCheckout].quantity + acc
      );
    }, 0);

    setTotalPrice(tmpPrice);
  };

  const handleProductCount = (itemId, quantity) => {
    console.log(itemId, quantity, "check handle product count");
    dispatch({
      type: typeCarts.updateCart,
      payload: {
        cartItemId: itemId,
        quantity,
      },
    });
  };

  const handleDeleteProduct = (itemId) => {
    console.log(itemId, "check delete product count");
    dispatch({
      type: typeCarts.removeOutCart,
      payload: {
        cartItemId: itemId,
      },
    });
  };

  const handleChangeCheckOut = (checkoutItemId, status) => {
    console.log(status);
    if (status == statusCart.activeToCheckout) {
      dispatch({
        type: typeCarts.activeToCheckout,
        payload: {
          data: checkoutItemId,
        },
      });
    }
    if (status == statusCart.inActiveToCheckout) {
      dispatch({
        type: typeCarts.inActiveToCheckout,
        payload: {
          data: checkoutItemId,
        },
      });
    }
  };

  const onRefresh = () => {
    dispatch({ type: typeCarts.fetchCart });
    // if (isLoading) {
    //   setRefreshing(false);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>My Cart</Text>
      </View>
      {!isLogin && <RequireLogin navigation={navigation} />}
      {!isLoading && isLogin ? (
        <FlatList
          style={styles.listCartItemContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <View
              style={{
                height: 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>khoong co san pham in cart</Text>
            </View>
          }
          ItemSeparatorComponent={Line}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CartItem
              item={item}
              listCheckOutId={listCheckOutId}
              navigation={navigation}
              onProductCount={(itemId, quantity) =>
                handleProductCount(itemId, quantity)
              }
              showLoadingEdit={() => setShowLoadingEditCheckList(true)}
              onDeleteProduct={(itemId) => handleDeleteProduct(itemId)}
              onChangeCheckout={(chechoutItemId, status) => {
                handleChangeCheckOut(chechoutItemId, status);
              }}
            />
          )}
        />
      ) : (
        // <MainLoading padding={30} />
        <LottieView
          source={require("../../../assets/stayHome.json")}
          autoPlay
          loop
          style={{ height: 300 }}
        />
      )}

      <Button
        disabled={
          totalPrice &&
          !isloadingUpdateCart &&
          !showLoadingEditCheckList &&
          isLogin
            ? false
            : true
        }
        onPress={() => navigation.navigate("Order Detail", totalPrice)}
        style={{
          backgroundColor:
            totalPrice &&
            !isloadingUpdateCart &&
            !showLoadingEditCheckList &&
            isLogin
              ? theme.colors.primary
              : theme.colors.notGray,
          width: "90%",
          position: "absolute",
          bottom: Dimensions.get("window").height * 0.08,
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: "white",
            fontFamily: "gilroy-bold",
            flex: 1,
            textAlign: "center",
          }}
        >
          Go to Checkout
        </Text>
        {showLoadingEditCheckList || isloadingUpdateCart ? (
          <ActivityIndicator
            animating={true}
            color={theme.backgrounds.white}
            size={21}
            style={{ height: 25 }}
          />
        ) : (
          <NumberFormat
            value={totalPrice ? Math.round(totalPrice * 100) / 100 : 0.0}
            displayType={"text"}
            thousandSeparator={true}
            // suffix={" vnd"}
            prefix={"$"}
            renderText={(formattedValue) => (
              <Text style={styles.titleText} numberOfLines={1}>
                {formattedValue}
              </Text>
            )}
          />
        )}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingBottom: Dimensions.get("window").height * 0.09 + 37,
  },
  listCartItemContainer: {
    width: "90%",
    margin: "auto",
  },
  titleTextContainer: {
    width: "100%",
    borderBottomColor: Colors.grayWhite,
    borderBottomWidth: 1,
    backgroundColor: "white",
    paddingVertical: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 18,
    height: 25,
    fontFamily: "gilroy-bold",
  },
});

export default CartScreen;
