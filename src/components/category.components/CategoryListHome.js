import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../common/theme";
import MainLoading from "../Loader/MainLoading";
import { CategoryListHomeDetail } from "./CategoryListHomeDetail";

export const CategoryListHome = ({ navigation, ...props }) => {
  const { data, isLoading } = useSelector((state) => state.categories);
  const { productByCategory } = useSelector((state) => state.products);
  console.log(`productByCategory`, Object.values(productByCategory));

  return (
    <View style={styles.container}>
      {!isLoading ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Object.keys(productByCategory)}
          renderItem={({ item }) => (
            // console.log(`item`, item), (<Text>alo alo</Text>)
            <CategoryListHomeDetail item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <MainLoading height={190} padding={30} />
      )}
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
    flex: 1,
  },
  nameDetail: {
    backgroundColor: "red",
    margin: 3,
  },
  root: {
    flex: 1,
    padding: 10,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.lineBorder,
  },
  text: {
    textAlign: "center",
    color: theme.colors.notBlack,
  },
  active: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  textActive: {
    color: theme.backgrounds.white,
  },
});
