import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, StyleSheet, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { multipleRowsFlatListFormat } from "../common/format/FlatListDataFormat";
import GroceryItem from "./GroceryItem";
import CategoryHomeLoader from "./Loader/CategoryHomeLoader";
import { windowHeight } from "../common/Dimensions";

const GroceriesList = ({ isHome = false }) => {
  const { isLoading, data } = useSelector((state) => state.categories);

  return (
    <View
      style={[
        styles.container,
        isHome ? {} : { paddingBottom: windowHeight * 0.09 },
      ]}
    >
      {!isLoading ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={isHome}
          numColumns={isHome ? null : 2}
          showsVerticalScrollIndicator={false}
          data={multipleRowsFlatListFormat(data, 2)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) =>
            item == "empty" ? (
              <View key={index} style={styles.cardItemContainer}></View>
            ) : (
              <View key={index} style={styles.cardItemContainer}>
                {isHome ? (
                  <GroceryItem item={item} />
                ) : (
                  <CategoryItem item={item} />
                )}
              </View>
            )
          }
        />
      ) : (
        <CategoryHomeLoader />
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
