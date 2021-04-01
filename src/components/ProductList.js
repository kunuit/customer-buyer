import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CardItem from "./CardItem";
const ProductList = ({ title, ...props }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title ? title : "No Title"}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        // columnWrapperStyle={{
        //   flex: 1,
        // }}
        showsVerticalScrollIndicator={false}
        // numColumns={2}
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardItemContainer}>
            <CardItem
              item={item}
              heightCard={200}
              fontSizeTitle={16}
              fontSizeDes={14}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    height: "auto",
  },
  titleContainer: {
    marginHorizontal: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "5%",
  },
  title: {
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "#181725",
  },
  seeAllText: {
    color: "#53B175",
    fontFamily: "gilroy-light",
    fontSize: 12,
  },
  cardItemContainer: {
    margin: 10,
    flex: 1,
  },
});

export default ProductList;
