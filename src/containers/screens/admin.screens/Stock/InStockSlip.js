import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Text, View } from "react-native";
import CardStockSlip from "../../../../components/admin.components/CardStockSlip";
import SearchView from "../../../../components/SearchView";
import TitleScreen from "../../../../components/TitleScreen";

const InStockSlip = ({ navigation }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <SafeAreaView style={styles.exploreContainer}>
      <SearchView holSearch='my input stock slips' />

      <FlatList
        style={styles.listCardItemContainer}
        showsVerticalScrollIndicator={false}
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardStockSlip item={item} navigation={navigation} />
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
  },
  listCardItemContainer: {
    marginBottom: Dimensions.get("window").height * 0.09,
  },
});

export default InStockSlip;
