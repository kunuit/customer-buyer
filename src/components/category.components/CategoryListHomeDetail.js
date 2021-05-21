import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { windowWidth } from "../../common/Dimensions";
import CardItem from "../CardItem";
import MainLoading from "../Loader/MainLoading";

export const CategoryListHomeDetail = ({ item, navigation, ...props }) => {
  const { data, isLoading } = useSelector((state) => state.categories);
  const { isLoadingFilterByCategory, productByCategory } = useSelector(
    (state) => state.products
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {productByCategory[item].name
            ? productByCategory[item].name
            : "No Title"}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Category Detail", item)}
        >
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.root}>
        {!isLoadingFilterByCategory ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            initialNumToRender={4}
            data={productByCategory[item].products}
            ListEmptyComponent={
              <View
                style={{
                  width: windowWidth,
                  height: 200,
                  margin: 10,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>khoong co san pham</Text>
              </View>
            }
            renderItem={({ item }) => (
              <View style={styles.cardItemContainer}>
                <CardItem
                  item={item}
                  heightCard={200}
                  fontSizeTitle={16}
                  fontSizeDes={14}
                  numberOfLines={1}
                  navigation={navigation}
                />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <View
            style={{
              width: windowWidth,
              height: 200,
              margin: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MainLoading height={190} padding={30} />
          </View>
        )}
      </View>
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
  root: {
    flex: 1,
  },
  cardItemContainer: {
    margin: 10,
    flex: 1,
    width: 135,
  },
});
