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
import NumberFormat from "react-number-format";
import { theme } from "../../common/theme";
import { ActivityIndicator } from "react-native-paper";

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
  const [refreshing, setRefreshing] = useState(false);
  //! huong giai quyet thi sẽ là tạo ra 1 function để quản lý listCheckOut
  console.log(listCheckOutId, "check check out state");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log("run effect in cart screen");
    dispatch({ type: typeCarts.fetchCartFirebase });
    setTotalPrice(0);
  }, []);

  useEffect(() => {
    if (!isloadingUpdateCart) {
      updateListCheckOut();
    }
  }, [isloadingUpdateCart, listCheckOutId]);

  const updateListCheckOut = () => {
    const tmpPrice = listCheckOutId.reduce((acc, cur) => {
      const indexCheckout = data.findIndex((item) => item.id == cur);
      return +data[indexCheckout].price * +data[indexCheckout].quantity + acc;
    }, 0);

    setTotalPrice(tmpPrice);
  };

  const handleProductCount = (itemId, quantity) => {
    console.log(itemId, quantity, "check handle product count");
    dispatch({
      type: typeCarts.updateCart,
      payload: {
        data: itemId,
        quantity,
      },
    });
  };

  const handleDeleteProduct = (itemId) => {
    console.log(itemId, "check delete product count");
    dispatch({
      type: typeCarts.removeOutCart,
      payload: {
        data: itemId,
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
    dispatch({ type: typeCarts.fetchCartFirebase });
    // if (isLoading) {
    //   setRefreshing(false);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>My Cart</Text>
      </View>
      {!isLoading ? (
        <FlatList
          style={styles.listCartItemContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ItemSeparatorComponent={Line}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <CartItem
                item={item}
                listCheckOutId={listCheckOutId}
                navigation={navigation}
                onProductCount={(itemId, quantity) =>
                  handleProductCount(itemId, quantity)
                }
                onDeleteProduct={(itemId) => handleDeleteProduct(itemId)}
                onChangeCheckout={(chechoutItemId, status) => {
                  handleChangeCheckOut(chechoutItemId, status);
                }}
              />
            </View>
          )}
        />
      ) : (
        <MainLoading padding={30} />
      )}
      <Button
        disabled={totalPrice && !isloadingUpdateCart ? false : true}
        style={{
          backgroundColor:
            totalPrice && !isloadingUpdateCart
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
        {isloadingUpdateCart ? (
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
