import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import CardMyCart from "../../../../components/admin.components/CardMyCart.admin";
import SearchView from "../../../../components/SearchView";
import TitleScreen from "../../../../components/TitleScreen";

const CartAdmin = ({ navigation }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <SafeAreaView style={styles.exploreContainer}>
      <TitleScreen isBorder={false}>My Cart</TitleScreen>

      <SearchView holSearch='my cart' />

      <FlatList
        style={styles.listCardItemContainer}
        showsVerticalScrollIndicator={false}
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardMyCart item={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  listCardItemContainer: {
    marginBottom: Dimensions.get("window").height * 0.09,
  },
});

export default CartAdmin;
