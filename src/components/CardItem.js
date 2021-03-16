import React, { useEffect, useState } from "react";
import Colors from "../../constants/colors";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import RoundedButton from "../components/RoundedButton";
const CardItem = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri:
              "https://lh3.googleusercontent.com/proxy/Bo2jK1aYpGE29Lz8FIMuAY8yuwFZhOCeETa0ep5cXgZDBG07Hc5tcbQ5hij_46D4F_lK9WFf7IXtDr0tI3GagCOq3H46d480sgf8kQ",
          }}
        />
      </View>
      <View style={styles.cardDetailContainer}>
        <Text numberOfLines={2} style={styles.titleText}>
          Organic Bananas asdasd
        </Text>
        <Text style={styles.descriptionText}>7pcs, Price</Text>
      </View>
      <View style={styles.addToCartContainer}>
        <Text style={styles.titleText}>$4.99</Text>
        <RoundedButton
          style={{
            backgroundColor: Colors.green,
            borderColor: Colors.grayWhite,
          }}
        >
          <Entypo name="plus" size={17} color="white" />
        </RoundedButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    width: "43%",
    height: 250,
    borderColor: Colors.gray,
    borderRadius: 20,
    borderWidth: 1,
  },
  cardImageContainer: {
    height: "45%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cardDetailContainer: {
    height: "30%",
    alignItems: "flex-start",
  },
  titleText: {
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "black",
  },
  descriptionText: {
    marginTop: 3,
    fontFamily: "gilroy-light",
    fontSize: 16,
    color: Colors.gray,
  },
  addToCartContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CardItem;
