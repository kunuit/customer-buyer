import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Searchbar } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";
import ProductList from "../../components/ProductList";
import SearchView from "../../components/SearchView";
import TitleScreen from "../../components/TitleScreen";
import GroceriesList from "../../components/GroceriesList";
import Grocery from "../../components/Grocery";
import { typeProducts } from "../../sagas/product.saga";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <TitleScreen isBorder={false}>Home</TitleScreen>
      <SearchView />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.productListContainer}>
          <ProductList title='Exclusive Offer' />
          <ProductList title='Best Selling' />
          <Grocery title='Groceries' />
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
