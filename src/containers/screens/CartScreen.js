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
import { typeCarts } from "../../sagas/cart.saga";
import MainLoading from "../../components/Loader/MainLoading";

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
  const { isLoading, data } = useSelector((state) => state.carts);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    console.log("run effect in cart screen");
    dispatch({ type: typeCarts.fetchCartFirebase });
  }, []);

  const handleProductCount = (itemId, quantity) => {
    console.log(itemId, "check handle product count");
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
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <CartItem
                item={item}
                onProductCount={(itemId, quantity) =>
                  handleProductCount(itemId, quantity)
                }
                onDeleteProduct={(itemId) => handleDeleteProduct(itemId)}
                navigation={navigation}
              />
              <Line />
            </View>
          )}
        />
      ) : (
        <MainLoading padding={30} />
      )}
      <Button
        style={{
          backgroundColor: Colors.green,
          width: "90%",
          position: "absolute",
          bottom: Dimensions.get("window").height * 0.08,
        }}
      >
        <Text style={{ color: "white", fontFamily: "gilroy-bold" }}>
          Go to Checkout
        </Text>
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
    fontFamily: "gilroy-bold",
  },
});

export default CartScreen;
