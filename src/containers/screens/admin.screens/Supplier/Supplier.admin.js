import React from "react";
import { useState } from "react";
import { FlatList, RefreshControl, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Text, View } from "react-native";
import { FAB } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { windowHeight } from "../../../../common/Dimensions";
import { theme } from "../../../../common/theme";
import CardMySupplier from "../../../../components/admin.components/CardMySupplier.admin";
import MainLoading from "../../../../components/Loader/MainLoading";
import SearchView from "../../../../components/SearchView";
import TitleScreen from "../../../../components/TitleScreen";
import { typeSuppliers } from "../../../../sagas/supplier.saga";
import { statusFetch } from "../../../../sagas/utilSagas.saga";

const SupplierAdmin = ({ navigation }) => {
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const { data, isLoading } = useSelector((state) => state.suppliers);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(`searchQuery`, searchQuery);
  // const { isLoading } = useSelector((state) => state.products);
  const onChangeSearch = (query) => setSearchQuery(query);

  const onRefresh = () => {
    dispatch({
      type: typeSuppliers.fetchSupplier,
      payload: {
        status: statusFetch.load,
      },
    });
    // if (isLoading) {
    //   setRefreshing(false);
    // }
  };

  return (
    <SafeAreaView style={styles.exploreContainer}>
      <TitleScreen isBorder={false} title="My Suppliers" />

      <SearchView
        searchQuery={searchQuery}
        searchQueryValue={(query) => onChangeSearch(query)}
        holSearch="my supplier"
      />

      {!isLoading ? (
        <FlatList
          style={styles.listCardItemContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CardMySupplier item={item} navigation={navigation} />
          )}
        />
      ) : (
        <MainLoading padding={30} />
      )}

      <FAB
        onPress={() => navigation.navigate("Create Supplier")}
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
    backgroundColor: "white",
    paddingBottom: windowHeight * 0.09,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: windowHeight * 0.09,
  },
  listCardItemContainer: {},
});

export default SupplierAdmin;
