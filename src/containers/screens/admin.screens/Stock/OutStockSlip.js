import React, { useState } from "react";
import { SafeAreaView, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Text, View } from "react-native";
import { windowHeight } from "../../../../common/Dimensions";
import CardStockSlip from "../../../../components/admin.components/CardStockSlip";
import SearchView from "../../../../components/SearchView";
import TitleScreen from "../../../../components/TitleScreen";

const OutStockSlip = ({ navigation }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [searchQuery, setSearchQuery] = useState("");
  console.log(`searchQuery`, searchQuery);
  // const { isLoading } = useSelector((state) => state.products);
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.exploreContainer}>
      <SearchView
        searchQuery={searchQuery}
        searchQueryValue={(query) => onChangeSearch(query)}
        holSearch="my output stock slips"
      />

      <FlatList
        style={styles.listCardItemContainer}
        showsVerticalScrollIndicator={false}
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <CardStockSlip key={index} item={item} navigation={navigation} />
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
    paddingTop: "1%",
    paddingBottom: windowHeight * 0.09,
  },
  listCardItemContainer: {},
});

export default OutStockSlip;
