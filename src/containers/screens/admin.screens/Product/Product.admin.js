import React from "react";
import { Dimensions, RefreshControl } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import Animated from "react-native-reanimated";
import { useDispatch, useSelector } from "react-redux";
import { windowHeight } from "../../../../common/Dimensions";
import { theme } from "../../../../common/theme";
import CardMyProduct from "../../../../components/admin.components/CardMyProduct.admin";
import MainLoading from "../../../../components/Loader/MainLoading";
import SearchView from "../../../../components/SearchView";
import TitleScreen from "../../../../components/TitleScreen";
import { typeProducts } from "../../../../sagas/product.saga";
import { useState } from "react";
import { statusFetch } from "../../../../sagas/utilSagas.saga";

const ProductAdmin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading, isLoadingFetchAddProduct, productPagination } =
    useSelector((state) => state.products);
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
  };

  return (
    <SafeAreaView style={styles.exploreContainer}>
      <TitleScreen isBorder={false} title="My Products" />

      <SearchView
        searchQuery={searchQuery}
        searchQueryValue={(query) => onChangeSearch(query)}
        holSearch="my product"
      />

      {!isLoading ? (
        <FlatList
          style={styles.listCardItemContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data}
          renderItem={({ item, index }) => (
            <CardMyProduct item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => {
            //! check error in here
            if (productPagination.totalPage > productPagination.currentPage) {
              dispatch({
                type: typeProducts.fetchProduct,
                payload: {
                  status: statusFetch.loadMore,
                },
              });
            }
          }}
          onEndReachedThreshold={0.001}
          ListFooterComponent={
            isLoadingFetchAddProduct && <MainLoading padding={10} />
          }
        />
      ) : (
        <MainLoading padding={30} />
      )}

      <FAB
        onPress={() => navigation.navigate("Create Product")}
        style={styles.fab}
        small={false}
        theme={{ colors: { accent: theme.colors.primary } }}
        icon="plus"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingBottom: windowHeight * 0.09,
  },
  listCardItemContainer: {
    flex: 1,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: windowHeight * 0.09,
  },
});

export default ProductAdmin;
