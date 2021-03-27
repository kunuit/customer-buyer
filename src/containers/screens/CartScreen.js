import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import Colors from "../../constants/colors";
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
const CartScreen = () => {
  const { products } = useSelector((state) => state);
  const dispatch = useDispatch();
  const dispatchGetAllProducts = () =>
    dispatch({
      type: "FETCH_PRODUCTS",
    });
  useEffect(() => {
    // dispatchGetAllProducts();
  }, []);
  const fakeData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>My Cart</Text>
      </View>
      <FlatList
        style={styles.listCartItemContainer}
        showsVerticalScrollIndicator={false}
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View>
            <CartItem product={item} />
            <Line />
          </View>
        )}
      />
      <Button
        style={{
          backgroundColor: Colors.green,
          width: "90%",
          position: "absolute",
          bottom: Dimensions.get("window").height * 0.08,
        }}>
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
