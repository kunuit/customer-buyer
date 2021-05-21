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
<<<<<<< HEAD
import HomeBanner from "../../components/HomeBanner";
=======
import { useDispatch, useSelector } from "react-redux";
import { typeProducts } from "../../sagas/product.saga";
import { ProductListViaCategory } from "../../components/ProductListViaCategory";
import HomeBanner from "../../components/HomeBanner";
import { CategoryListHome } from "../../components/category.components/CategoryListHome";
import { statusFetch } from "../../sagas/utilSagas.saga";

const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(`searchQuery`, searchQuery);
  // const { isLoading } = useSelector((state) => state.products);
  const onChangeSearch = (query) => setSearchQuery(query);

  const onRefresh = () => {
    dispatch({
      type: typeProducts.fetchProduct,
      payload: {
        status: statusFetch.load,
      },
    });
    dispatch({
      type: typeProducts.fetchProductByCategory,
    });
  };
>>>>>>> react-native-cli

  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <TitleScreen isBorder={false} title="Home" />
      <SearchView
        searchQuery={searchQuery}
        searchQueryValue={(query) => onChangeSearch(query)}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.productListContainer}>
          <HomeBanner />
<<<<<<< HEAD
          <ProductList title="Exclusive Offer" />
          <ProductList title="Best Selling" />
          <Grocery title="Groceries" />
=======
          <ProductList title="Exclusive Offer" navigation={navigation} />
          <Grocery title="Categories" navigation={navigation} />
          <ProductList title="Best Selling" navigation={navigation} />
          <ProductListViaCategory
            title="Product with category"
            navigation={navigation}
          />
          {/* <ProductListViaCategory
            title="Product with category 2"
            navigation={navigation}
          /> */}
          {/* <CategoryListHome navigation={navigation} /> */}
>>>>>>> react-native-cli
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
    paddingTop: Dimensions.get("window").height * 0.03,
    paddingBottom: Dimensions.get("window").height * 0.09,
  },
});

export default Home;
