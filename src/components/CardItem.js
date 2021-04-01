import React, { useEffect, useState } from "react";
import Colors from "../constants/colors";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import RoundedButton from "../components/RoundedButton";
import { useSelector } from "react-redux";
const CardItem = (props) => {
  const { fontSizeTitle, heightCard, fontSizeDes } = props;
  const { isAdminLogin } = useSelector((state) => state.auth);
  return (
    <TouchableOpacity
      style={[styles.cardContainer, { height: heightCard ? heightCard : 250 }]}
    >
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri:
              "https://i.pinimg.com/originals/eb/d4/de/ebd4deb64c74e2f1246626d5a290274d.png",
          }}
        />
      </View>
      <View style={styles.cardDetailContainer}>
        <Text
          numberOfLines={2}
          style={[
            styles.titleText,
            { fontSize: fontSizeTitle ? fontSizeTitle : 18 },
          ]}
        >
          {`Straw berry ${props.item}`}
        </Text>
        <Text
          style={[
            styles.descriptionText,
            { fontSize: fontSizeDes ? fontSizeDes : 16 },
          ]}
        >
          7pcs, Price
        </Text>
      </View>
      <View style={styles.addToCartContainer}>
        <Text
          style={[
            styles.titleText,
            { fontSize: fontSizeTitle ? fontSizeTitle : 18 },
          ]}
        >
          $4.99
        </Text>
        <RoundedButton
          style={{
            backgroundColor: Colors.green,
            borderColor: Colors.grayWhite,
          }}
        >
          <Entypo
            name={isAdminLogin ? "pencil" : "plus"}
            size={17}
            color="white"
          />
        </RoundedButton>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    width: "100%",
    height: 250,
    borderColor: Colors.gray,
    borderRadius: 20,
    borderWidth: 1,
  },
  cardImageContainer: {
    marginBottom: 20,
    height: "45%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cardDetailContainer: {
    flexGrow: 1,
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
