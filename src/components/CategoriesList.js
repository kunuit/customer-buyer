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
const CategoriesList = (props) => {
  const multipleRowsFlatListFormat = (dataList, numColumns) => {
    const totalRows = Math.floor(dataList.length / numColumns);
    let totalItemLastRow = dataList.length - totalRows * numColumns;
    console.log(totalRows, totalItemLastRow);
    while (totalItemLastRow !== 0 && totalItemLastRow !== numColumns) {
      dataList.push("empty");
      totalItemLastRow++;
    }
    return dataList;
  };
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(categories);
  const dispatchGetAllCategories = () =>
    dispatch({
      type: "FETCH_CATEGORIES",
    });
  const [item, setItem] = useState(itemData);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={multipleRowsFlatListFormat(item, 2)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          item == "empty" ? (
            <View style={styles.cardItemContainer}></View>
          ) : (
            <View style={styles.cardItemContainer}>
              <CategoryItem item={item} />
            </View>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "95%",
    margin: "auto",
    paddingBottom: Dimensions.get("window").height * 0.09,
  },
  cardItemContainer: {
    margin: 10,
    flex: 1,
  },
  cardContainer: {
    padding: 10,
    height: 230,
    borderColor: "#53B174",
    // backgroundColor: "rgba(83, 177, 117, 0.1)",
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

export default CategoriesList;
