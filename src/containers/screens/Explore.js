import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import ListCardItem from "../../components/ListCardItem";
import GroceriesList from "../../components/GroceriesList";
import Colors from "../../constants/colors";
import TitleScreen from "../../components/TitleScreen";
import SearchView from "../../components/SearchView";
import { typeProducts } from "../../sagas/product.saga";
import { useDispatch, useSelector } from "react-redux";
import LottieView from "lottie-react-native";

const Explore = ({ navigation }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  const { data, queryProduct, isLoadingSearchProduct } = useSelector(
    (state) => state.products
  );

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
    <SafeAreaView style={styles.exploreContainer}>
      <TitleScreen isBorder={false} title="Explore" />
      <SearchView
        holSearch="Product"
        searchQuery={searchQuery}
        searchQueryValue={(query) => onChangeSearch(query)}
      />
      {!searchQuery ? (
        <GroceriesList navigation={navigation} />
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  searchContainer: {
    alignItems: "center",
    width: "100%",
  },
  titleText: {
    fontFamily: "gilroy-bold",
    fontSize: 20,
    color: "#181725",
  },
  searchBar: {
    width: "90%",
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    marginVertical: "3%",
  },
  titleTextContainer: {
    alignItems: "center",
    width: "100%",
    borderBottomColor: Colors.grayWhite,
    borderBottomWidth: 1,
    backgroundColor: "white",
    paddingVertical: 20,
  },
});
export default Explore;
