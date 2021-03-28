import React from "react";
import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import Animated from "react-native-reanimated";
import { theme } from "../../../common/theme";
import ListCardItem from "../../../components/ListCardItem";
import SearchView from "../../../components/SearchView";
import TitleScreen from "../../../components/TitleScreen";

const ProductAdmin = () => {
  // set hidden search bar
  const scrollY = new Animated.Value(0);
  const handleSetScrollY = (e) => {
    scrollY.setValue(e);
  };

  return (
    <SafeAreaView style={styles.exploreContainer}>
      <TitleScreen isBorder={false}>My Products</TitleScreen>

      <SearchView holSearch='my product' />
      <ListCardItem onSetScrollY={(e) => handleSetScrollY(e)} />

      <FAB
        onPress={() => console.log("create new products")}
        style={styles.fab}
        small={false}
        theme={{ colors: { accent: theme.colors.primary } }}
        icon='plus'
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
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: Dimensions.get("window").height * 0.08,
  },
});

export default ProductAdmin;
