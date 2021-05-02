import { useIsFocused } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  RefreshControl,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import FavouriteItem from "../../components/FavouriteItem";
import MainLoading from "../../components/Loader/MainLoading";
import Colors from "../../constants/colors";
import { typeFavorites } from "../../sagas/favorite.saga";

const Line = () => {
  return (
    <View
      style={{
        borderBottomColor: Colors.grayWhite,
        borderBottomWidth: 1,
      }}
    />
  );
};

const CartScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { isLoadingFetchFavoriteProduct, favoriteProducts } = useSelector(
    (state) => state.favorites
  );
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    dispatch({ type: typeFavorites.fetchFavorite });
  }, [isFocused]);

  const onRefresh = () => {
    dispatch({ type: typeFavorites.fetchFavorite });
    // if (isLoadingFetchFavoriteProduct) {
    //   setRefreshing(false);
    // }
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>Favourite</Text>
      </View>
      {isLoadingFetchFavoriteProduct ? (
        <MainLoading padding={30} />
      ) : (
        <FlatList
          style={styles.listCartItemContainer}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={favoriteProducts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View>
              <FavouriteItem item={item.product} navigation={navigation} />
              <Line />
            </View>
          )}
        />
      )}
      <Button
        style={{
          backgroundColor: Colors.green,
          width: "90%",
          position: "absolute",
          bottom: Dimensions.get("window").height * 0.08,
        }}
      >
        <Text style={{ color: "white", fontFamily: "gilroy-bold" }}>
          Add All To Cart
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingBottom: Dimensions.get("window").height * 0.09 + 37,
  },
  listCartItemContainer: {
    width: "90%",
    margin: "auto",
  },
  titleTextContainer: {
    width: "100%",
    borderBottomColor: Colors.grayWhite,
    borderBottomWidth: 1,
    backgroundColor: "white",
    paddingVertical: 20,
    alignItems: "center",
  },
  titleText: {
    fontSize: 18,
    fontFamily: "gilroy-bold",
  },
});

export default CartScreen;
