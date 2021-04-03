import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CategoriesList from "../../components/CategoriesList";
import { Searchbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import ProductList from "../../components/ProductList";
import SearchView from "../../components/SearchView";
import TitleScreen from "../../components/TitleScreen";
import GroceriesList from "../../components/GroceriesList";
import Grocery from "../../components/Grocery";

const Home = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <TitleScreen isBorder={false}>Home</TitleScreen>
      <SearchView />
      <ScrollView>
        <View style={styles.productListContainer}>
          <ProductList title="Exclusive Offer" />
          <ProductList title="Best Selling" />
          <Grocery title="Groceries" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  homeScreenContainer: {
    height: Dimensions.get("window").height,
    backgroundColor: "white",
    flex: 1,
  },
  productListContainer: {
    paddingBottom: Dimensions.get("window").height * 0.09,
  },
});

export default Home;
