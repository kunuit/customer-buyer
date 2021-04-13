import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";

import ProductList from "../../components/ProductList";
import SearchView from "../../components/SearchView";
import TitleScreen from "../../components/TitleScreen";
import Grocery from "../../components/Grocery";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <TitleScreen isBorder={false}>Home</TitleScreen>
      <SearchView />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.productListContainer}>
          <ProductList title="Exclusive Offer" navigation={navigation} />
          <Grocery title="Groceries" navigation={navigation} />
          <ProductList title="Best Selling" navigation={navigation} />
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
