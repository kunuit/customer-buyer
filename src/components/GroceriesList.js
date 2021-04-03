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
import Colors from "../constants/colors";
import { itemData } from "../components/data/data";
import Button from "../components/Button";
import ProductLoader from "./Loader/ProductLoader";
import ProductItem from "./Loader/ProductItem";
import { multipleRowsFlatListFormat } from "../common/format/FlatListDataFormat";
import GroceryItem from "./GroceryItem";
const GroceriesList = (props) => {
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch();
  const dispatchGetAllCategories = () =>
    dispatch({
      type: "FETCH_CATEGORIES",
    });
  const [item, setItem] = useState(itemData);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timing = setTimeout(() => setIsLoaded(true), 2000);
    return () => clearTimeout(timing);
  }, []);
  return (
    <View style={styles.container}>
      {isLoaded ? (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={multipleRowsFlatListFormat(item, 1)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>
            item == "empty" ? (
              <View style={styles.cardItemContainer}></View>
            ) : (
              <View style={styles.cardItemContainer}>
                <GroceryItem item={item} />
              </View>
            )
          }
        />
      ) : (
        <ProductLoader />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    margin: "auto",
  },
  cardItemContainer: {
    margin: 10,
    flex: 1,
  },
  cardContainer: {
    padding: 10,
    height: 230,
    borderColor: "#53B174",
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
    height: "auto",
  },
});

export default GroceriesList;
