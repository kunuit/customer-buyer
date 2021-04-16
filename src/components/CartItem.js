import React from "react";
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

const CartItem = ({ item, onProductCount, onDeleteProduct, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.cartItemContainer}
      onPress={() => {
        item.status == 5
          ? console.log("product not exits")
          : navigation.navigate("Product Detail", item);
      }}
    >
      <View style={styles.cartImageContainer}>
        <Image
          style={styles.cartImage}
          source={{
            uri: item.images[0],
            // "https://theme.hstatic.net/1000273444/1000452469/14/no-img.png?v=1804",
          }}
        />
      </View>
      <View style={styles.cartDetailContainer}>
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.titleText}>{item.name}</Text>
          <Text style={{ color: Colors.gray }}>1kg, prices</Text>
        </View>
        <View style={styles.quantityAjustContainer}>
          <RoundedButton
            disabled={item.status == 5 ? true : false}
            onPress={() => {
              if (item.quantity > 1) onProductCount(item.id, item.quantity - 1);
            }}
          >
            <Entypo name="minus" size={17} color={Colors.gray} />
          </RoundedButton>
          <View style={{ marginLeft: 12, marginRight: 12 }}>
            <Text style={(styles.titleText, { fontSize: 16 })}>
              {item.quantity}
            </Text>
          </View>
          <RoundedButton
            disabled={item.status == 5 ? true : false}
            onPress={() => {
              onProductCount(item.id, item.quantity + 1);
            }}
          >
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
        <TouchableOpacity
          onPress={() => {
            onDeleteProduct(item.id);
          }}
        >
          <View>
            <AntDesign
              name="close"
              style={{ paddingVertical: 5, paddingHorizontal: 5 }}
              size={20}
              color="black"
            />
          </View>
        </TouchableOpacity>
        <Text style={styles.titleText}>${item.price * item.quantity}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cartItemContainer: {
    marginVertical: 5,
    paddingVertical: 8,
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
    justifyContent: "space-between",
    width: "50%",
    height: 100,
  },
  cartAmount: {
    justifyContent: "space-between",
    alignItems: "flex-end",
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
export default CartItem;
