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

const Home = () => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <TitleScreen isBorder={false}>Home</TitleScreen>
      <SearchView />
      <ScrollView>
        <View style={styles.productListContainer}>
          <ProductList title="Exclusive Offer" />
          <ProductList title="Best Selling" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  homeScreenContainer: {
    height: Dimensions.get("window").height,
    backgroundColor: "white",
  },
});

export default Home;
