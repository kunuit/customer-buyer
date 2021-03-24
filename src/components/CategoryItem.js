import React, { useEffect, useState } from "react";
import Colors from "../constants/colors";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import RoundedButton from "../components/RoundedButton";
const CategoryItem = ({ item }) => {
  console.log(item)
  return (
    <View style={styles.cardContainer}>
      <View style={{ flex: 1 }}>
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={{
              uri: "",
            }}
          />
        </View>
        <View style={styles.cardDetailContainer}>
          <Text numberOfLines={2} style={styles.titleText}>
            {}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    height: 230,
    borderColor: "#53B174",
    backgroundColor: "rgba(83, 177, 117, 0.1)",
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
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: 'center',
  },
  titleText: {
    textAlign: "center",
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "black",
    height: 'auto',
  },
});

export default CategoryItem;
