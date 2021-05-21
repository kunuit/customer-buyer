import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  CheckBox,
} from "react-native";
import RoundedButton from "./RoundedButton";
import { Entypo, AntDesign } from "@expo/vector-icons";
import Colors from "../constants/colors";
import NumberFormat from "react-number-format";
import { statusProduct } from "../sagas/product.saga";
import { theme } from "../common/theme";
import { statusCart } from "../sagas/cart.saga";
import { debounce } from "lodash";
import { showToast } from "../common/Layout/toast.helper";

const CartItem = ({
  item,
  listCheckOutId,
  onProductCount,
  onDeleteProduct,
  onChangeCheckout,
  showLoadingEdit,
  navigation,
}) => {
  console.log(`item`, item.product.isDelete);
  const [isSelected, setIsSelected] = useState(
    listCheckOutId.some((e) => e == item.id)
  );
  const [quantityCart, setQuantityCart] = useState(item.quantity);

  const delayedQuery = useCallback(
    debounce((settedQuantity) => {
      onProductCount(item.id, settedQuantity);
    }, 300),
    []
  );

  useEffect(() => {
    setQuantityCart(item.quantity);
  }, [item.quantity]);

  const onActiveProductCheckOut = () => {
    onChangeCheckout(
      item.id,
      isSelected ? statusCart.inActiveToCheckout : statusCart.activeToCheckout
    );
    setIsSelected(!isSelected);
  };

  return (
    <View>
      <View style={styles.cartItemContainer}>
        <View style={styles.cartImageContainer}>
          <TouchableHighlight
            underlayColor={theme.backgrounds.white}
            onPress={() => {
              item.product.isDelete == statusProduct.isDeleted
                ? showToast({
                    title: "Cart",
                    type: "info",
                    message: "The product is deleted",
                  })
                : navigation.navigate("Product Detail", item.product);
            }}
          >
            <Image
              style={styles.cartImage}
              source={{
                uri: item.product.imageUrls[0],
                // "https://theme.hstatic.net/1000273444/1000452469/14/no-img.png?v=1804",
              }}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.cartDetailContainer}>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.titleText}>{item.product.name}</Text>
            <Text style={{ color: Colors.gray }}>1kg, prices</Text>
          </View>
          <View style={styles.quantityAjustContainer}>
            <RoundedButton
              disabled={
                item.product.isDelete == statusProduct.isDeleted ? true : false
              }
              onPress={() => {
                if (quantityCart > 1) {
                  setQuantityCart(quantityCart - 1);
                  delayedQuery(quantityCart - 1);
                  showLoadingEdit();
                }
              }}
            >
              <Entypo name="minus" size={17} color={Colors.gray} />
            </RoundedButton>
            <View style={{ marginLeft: 12, marginRight: 12 }}>
              <Text style={(styles.titleText, { fontSize: 16 })}>
                {quantityCart}
              </Text>
            </View>
            <RoundedButton
              disabled={
                item.product.isDelete == statusProduct.isDeleted ? true : false
              }
              onPress={() => {
                setQuantityCart(quantityCart + 1);
                delayedQuery(quantityCart + 1);
                showLoadingEdit();
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
              onChangeCheckout(item.id, false);
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

          <NumberFormat
            value={
              item.product.price
                ? Math.round(item.product.price * quantityCart * 100) / 100
                : 0.0
            }
            displayType={"text"}
            thousandSeparator={true}
            // suffix={" vnd"}
            prefix={"$"}
            renderText={(formattedValue) => (
              <Text numberOfLines={1} style={styles.titleText}>
                {formattedValue}
              </Text>
            )}
          />
          <CheckBox
            value={isSelected}
            disabled={
              item.product.isDelete == statusProduct.isDeleted ? true : false
            }
            onValueChange={() => {
              onActiveProductCheckOut();
            }}
            tintColors={{
              true: theme.colors.primary,
              false: theme.colors.notBlack,
            }}
            style={styles.checkbox}
          />
        </View>
      </View>
    </View>
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
  checkbox: {
    // alignSelf: "center",
  },
});
export default CartItem;
