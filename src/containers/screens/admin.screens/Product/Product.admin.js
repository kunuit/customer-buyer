import React from "react";
import { Dimensions } from "react-native";
import { FlatList } from "react-native";
import { StyleSheet } from "react-native";
import { SafeAreaView, Text, View } from "react-native";
import { FAB } from "react-native-paper";
import Animated from "react-native-reanimated";
import { useSelector } from "react-redux";
import { windowHeight } from "../../../../common/Dimensions";
import { theme } from "../../../../common/theme";
import CardMyProduct from "../../../../components/admin.components/CardMyProduct.admin";
import MainLoading from "../../../../components/Loader/MainLoading";
import ListCardItem from "../../../../components/ListCardItem";
import SearchView from "../../../../components/SearchView";
import TitleScreen from "../../../../components/TitleScreen";
import { typeProducts } from "../../../../sagas/product.saga";

const ProductAdmin = ({ navigation }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const { data, isLoading } = useSelector((state) => state.products);

  return (
    <SafeAreaView style={styles.exploreContainer}>
      <TitleScreen isBorder={false}>My Products</TitleScreen>

      <SearchView
        typeAction={typeProducts.queryProductFirebase}
        holSearch="my product"
      />

      {!isLoading ? (
        <FlatList
          style={styles.listCardItemContainer}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <CardMyProduct
              key={index}
              item={{ ...item }}
              navigation={navigation}
            />
          )}
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
    backgroundColor: "white",
    paddingBottom: windowHeight * 0.09,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: windowHeight * 0.09,
  },
});

export default ProductAdmin;
