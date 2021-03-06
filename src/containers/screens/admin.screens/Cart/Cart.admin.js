import React, { useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import { windowHeight } from "../../../../common/Dimensions";
import CardMyCart from "../../../../components/admin.components/CardMyCart.admin";
import SearchView from "../../../../components/SearchView";
import TitleScreen from "../../../../components/TitleScreen";

const CartAdmin = ({ navigation }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [searchQuery, setSearchQuery] = useState("");
  console.log(`searchQuery`, searchQuery);
  // const { isLoading } = useSelector((state) => state.products);
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.exploreContainer}>
      <TitleScreen isBorder={false} title="My Report" />

      <SearchView
        searchQuery={searchQuery}
        searchQueryValue={(query) => onChangeSearch(query)}
        holSearch="my report"
      />

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
    paddingBottom: windowHeight * 0.09,
  },
  listCardItemContainer: {},
});

export default CartAdmin;
