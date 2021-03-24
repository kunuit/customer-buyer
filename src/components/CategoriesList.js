import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
} from "react-native";
import CategoryItem from "../components/CategoryItem";
const CategoriesList = (props) => {
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(categories);
  const dispatchGetAllCategories = () =>
    dispatch({
      type: "FETCH_CATEGORIES",
    });
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{
          flex: 1,
        }}
        numColumns={2}
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardItemContainer}>
            <CategoryItem />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    paddingBottom: Dimensions.get("window").height * 0.09,
  },
  cardItemContainer: {
    padding: 5,
    flexBasis: "50%",
  },
});

export default CategoriesList;
