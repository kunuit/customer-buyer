import React from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import SearchView from "../../../components/SearchView";
import TitleScreen from "../../../components/TitleScreen";

const StockAdmin = () => {
  return (
    <SafeAreaView style={styles.exploreContainer}>
      <TitleScreen isBorder={false}>My Stock</TitleScreen>

      <SearchView holSearch='my stock' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default StockAdmin;
