import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/colors";
import NumberFormat from "react-number-format";
import { theme } from "../common/theme";
import { statusFetch } from "../sagas/utilSagas.saga";
import { statusProduct } from "../sagas/product.saga";
import { showToast } from "../common/Layout/toast.helper";

const FavouriteItem = ({ item, navigation }) => {
  return (
    <TouchableHighlight
      underlayColor={theme.backgrounds.white}
      onPress={() => {
        if (item.isDelete == statusProduct.isDeleted) {
          showToast({
            title: "Favorite",
            type: "info",
            message: "The product is not found",
          });
        } else {
          navigation.navigate("Product Detail", item);
        }
      }}
    >
      <View style={styles.cartItemContainer}>
        <View style={styles.cartImageContainer}>
          <Image
            style={styles.cartImage}
            resizeMode="center"
            source={{
              uri: item.imageUrls[0],
              // uri: "https://pngimg.com/uploads/pepsi/pepsi_PNG8956.png",
            }}
          />
        </View>
        <View style={styles.cartDetailContainer}>
          <View style={{ marginBottom: 5 }}>
            <Text style={styles.titleText}>{item.name}</Text>
            <Text style={{ color: Colors.gray }}>1kg, prices</Text>
          </View>
        </View>
        <View style={styles.cartAmount}>
          <NumberFormat
            value={item.price ? Math.round(item.price * 100) / 100 : 0.0}
            displayType={"text"}
            thousandSeparator={true}
            // suffix={" vnd"}
            prefix={"$"}
            renderText={(formattedValue) => (
              <Text style={styles.titleText}>{formattedValue}</Text>
            )}
          />
          <TouchableOpacity>
            <View>
              <AntDesign name="right" size={20} color="black" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableHighlight>
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
    paddingRight: 5,
  },
  quantityAjustContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonClickable: { color: Colors.green },
});
export default FavouriteItem;
