import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
} from "react-native";
import CardItem from "../components/CardItem";
const ListCardItem = () => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardItemContainer}>
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
