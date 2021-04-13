import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { multipleRowsFlatListFormat } from "../common/format/FlatListDataFormat";
import CardItem from "./CardItem";
import GroceriesList from "./GroceriesList";

const Grocery = ({ title, navigation, ...props }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const { data } = useSelector((state) => state.products);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title ? title : "No Title"}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      <GroceriesList isHome={true} />
      {/* <FlatList
        columnWrapperStyle={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={multipleRowsFlatListFormat(data, 2)}
        renderItem={({ item, index }) =>
          item == "empty" ? (
            <View style={styles.cardItemContainer}></View>
          ) : (
            <View style={styles.cardItemContainer}>
              <CardItem
                item={item}
                heightCard={210}
                fontSizeTitle={16}
                fontSizeDes={14}
                numberOfLines={1}
              />
            </View>
          )
        }
        keyExtractor={(item, index) => index.toString()}
      /> */}
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

export default Grocery;
