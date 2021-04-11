import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import CardItem from "../components/CardItem";

const ListCardItem = () => {
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
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.cardItemContainer}>
            <CardItem item={item} />
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
    margin: 10,
    flex: 1,
  },
});

export default ListCardItem;
