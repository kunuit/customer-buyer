import React from "react";
import { Dimensions, View, Text, StyleSheet, FlatList } from "react-native";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import Colors from "../../../constants/colors";
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
  const fakeData = [1, 2, 3, 4];
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>My Cart</Text>
      </View>
      <View style={styles.listCartItemContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={fakeData}
          keyExtractor={(item, index) => item.toString()}
          renderItem={({ item }) => (
            <View>
              <CartItem />
              <Line />
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    alignItems: "center",
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
