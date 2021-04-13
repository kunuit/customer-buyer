import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import MainLoading from "../components/Loader/MainLoading";

const ProductList = ({ title, navigation, ...props }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { data, isLoading } = useSelector((state) => state.products);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title ? title : "No Title"}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>
      {!isLoading ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          renderItem={({ item, index }) => (
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
    margin: 10,
    flex: 1,
    width: 135,
  },
});

export default ProductList;
