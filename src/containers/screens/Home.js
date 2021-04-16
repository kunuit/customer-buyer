import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  RefreshControl,
} from "react-native";

import ProductList from "../../components/ProductList";
import SearchView from "../../components/SearchView";
import TitleScreen from "../../components/TitleScreen";
import Grocery from "../../components/Grocery";
import { useDispatch, useSelector } from "react-redux";
import { typeProducts } from "../../sagas/product.saga";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  // const { isLoading } = useSelector((state) => state.products);

  const onRefresh = () => {
    dispatch({ type: typeProducts.fetchProductFirebase });
    // if (isLoading) {
    //   setRefreshing(false);
    // }
  };

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <TitleScreen isBorder={false} title="Home" />
      <SearchView />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.productListContainer}>
          <ProductList title="Exclusive Offer" navigation={navigation} />
          <Grocery title="Categories" navigation={navigation} />
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
