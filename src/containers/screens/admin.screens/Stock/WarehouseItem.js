import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import CardWarehouseItem from "../../../../components/admin.components/CardWarehouseItem";
import SearchView from "../../../../components/SearchView";
import TitleScreen from "../../../../components/TitleScreen";

const WarehouseItem = ({ navigation }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return (
    <SafeAreaView style={styles.exploreContainer}>
      <SearchView holSearch='my warehouse items' />

      <FlatList
        style={styles.listCardItemContainer}
        showsVerticalScrollIndicator={false}
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardWarehouseItem item={item} navigation={navigation} />
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

export default WarehouseItem;
