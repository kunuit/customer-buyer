import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import RoundedButton from "./RoundedButton";
import { Dimensions } from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/colors";
const CartItem = () => {
  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.cartImageContainer}>
        <Image
          style={styles.cartImage}
          source={{
            uri:
              "https://www.pngkey.com/png/full/164-1643396_reb-bell-pepper-png-1-red-bell-pepper.png",
          }}
        />
      </View>
      <View style={styles.cartDetailContainer}>
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.titleText}>Bell Pepper Red</Text>
          <Text style={{ color: Colors.gray }}>1kg, prices</Text>
        </View>
        <View style={styles.quantityAjustContainer}>
          <RoundedButton>
            <Entypo name="minus" size={17} color={Colors.gray} />
          </RoundedButton>
          <View style={{ marginLeft: 12, marginRight: 12 }}>
            <Text style={(styles.titleText, { fontSize: 16 })}>1</Text>
          </View>
          <RoundedButton>
            <Entypo
              name="plus"
              size={17}
              color="white"
              style={styles.buttonClickable}
            />
          </RoundedButton>
        </View>
      </View>
      <View style={styles.cartAmount}>
        <TouchableWithoutFeedback>
          <View>
            <AntDesign
              name="close"
              style={{ paddingVertical: 5, paddingHorizontal: 5 }}
              size={16}
              color="black"
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.titleText}>$4.99</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cartItemContainer: {
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: "100%",
    flexDirection: "row",
  },
  cartImageContainer: {
    padding: 5,
    width: "30%",
  },
  cartImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  cartDetailContainer: {
    padding: 6,
    justifyContent: "space-between",
    width: "50%",
    height: 100,
  },
  cartAmount: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    width: "20%",
    height: 100,
  },
  titleText: {
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "black",
  },
  quantityAjustContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonClickable: { color: Colors.green },
});
export default CartItem;
