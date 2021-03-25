import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import RoundedButton from "./RoundedButton";
import { Dimensions } from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
const FavouriteItem = () => {
  return (
    <TouchableOpacity style={styles.cartItemContainer}>
      <View style={styles.cartImageContainer}>
        <Image
          style={styles.cartImage}
          source={{
            uri: "https://pngimg.com/uploads/pepsi/pepsi_PNG8956.png",
          }}
        />
      </View>
      <View style={styles.cartDetailContainer}>
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.titleText}>Bell Pepper Red</Text>
          <Text style={{ color: Colors.gray }}>1kg, prices</Text>
        </View>
      </View>
      <View style={styles.cartAmount}>
        <Text style={styles.titleText}>$1.50</Text>
        <TouchableOpacity>
          <View>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cartItemContainer: {
    marginVertical: 8,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: "100%",
    flexDirection: "row",
  },
  cartImageContainer: {
    padding: 5,
    width: "25%",
  },
  cartImage: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  cartDetailContainer: {
    padding: 6,
    justifyContent: "center",
    width: "50%",
    height: 100,
  },
  cartAmount: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    height: 100,
  },
  titleText: {
    fontFamily: "gilroy-bold",
    fontSize: 16,
    color: Colors.black,
  },
  quantityAjustContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonClickable: { color: Colors.green },
});
export default FavouriteItem;
