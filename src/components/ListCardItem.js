import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { multipleRowsFlatListFormat } from "../common/format/FlatListDataFormat";
import CardItem from "../components/CardItem";

const ListCardItem = ({ navigation }) => {
  // const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { data } = useSelector((state) => state.products);

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={multipleRowsFlatListFormat(data, 2)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) =>
          item == "empty" ? (
            <View style={styles.cardItemContainer}></View>
          ) : (
            <View style={styles.cardItemContainer}>
              <CardItem item={item} navigation={navigation} />
            </View>
          )
        }
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
    margin: 10,
    flex: 1,
  },
});

export default ListCardItem;
