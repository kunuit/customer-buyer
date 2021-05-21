import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../common/theme";
import ListCardItem from "../../components/ListCardItem";
import LottieView from "lottie-react-native";
import SearchView from "../../components/SearchView";
import TitleScreen from "../../components/TitleScreen";
import { typeProducts } from "../../sagas/product.saga";

export default function CategoryDetail({ navigation, route }) {
  const dispatch = useDispatch();
  const item = route ? route.params : null;
  const { productByCategory, data, queryProduct, isLoadingSearchProduct } =
    useSelector((state) => state.products);

  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    if (searchQuery) {
      dispatch({
        type: typeProducts.queryProduct,
        payload: {
          searchQuery,
        },
      });
    }
  }, [searchQuery]);

  return (
    <View style={styles.root}>
      <TitleScreen
        isBorder={false}
        title={item ? productByCategory[item].name : "All Product"}
        navigation={navigation}
      />
      <SearchView
        holSearch={item ? productByCategory[item].name : "Product"}
        searchQuery={searchQuery}
        searchQueryValue={(query) => onChangeSearch(query)}
      />

      {!searchQuery ? (
        <ListCardItem
          navigation={navigation}
          products={item ? productByCategory[item].products : data}
          isColumn={true}
        />
      ) : isLoadingSearchProduct ? (
        <LottieView
          source={require("../../../assets/stayHome.json")}
          autoPlay
          loop
          style={{ height: 200 }}
        />
      ) : (
        <ListCardItem
          products={queryProduct}
          navigation={navigation}
          isColumn={true}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: theme.backgrounds.white,
  },
});
