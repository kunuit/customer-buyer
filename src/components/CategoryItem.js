import React from "react";
import Colors from "../constants/colors";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import RoundedButton from "../components/RoundedButton";
const CategoryItem = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        { backgroundColor: item.color, borderColor: item.color },
      ]}
      onPress={() => {
        navigation.navigate("Category Detail", item);
      }}
    >
      <View style={styles.cardImageContainer}>
        <Image
          style={styles.cardImage}
          source={{
            uri: item.imageUrl,
          }}
        />
      </View>
      <View style={styles.cardDetailContainer}>
        <Text numberOfLines={2} style={styles.titleText}>
          {`${item.name}`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 10,
    height: 230,
    borderColor: "#53B174",
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
  },
  cardImageContainer: {
    marginBottom: 20,
    height: "45%",
  },
  cardImage: {
    height: "100%",
    resizeMode: "contain",
  },
  cardDetailContainer: {
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "black",
  },
});

export default CategoryItem;
