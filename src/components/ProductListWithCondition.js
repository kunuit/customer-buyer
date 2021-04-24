import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { windowWidth } from "../common/Dimensions";
import CardItem from "./CardItem";
import MainLoading from "./Loader/MainLoading";

export const ProductListWithCondition = ({ navigation }) => {
  const { isLoading, productByCategory } = useSelector(
    (state) => state.products
  );
  return (
    <View style={styles.root}>
      {!isLoading ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={productByCategory}
          ListEmptyComponent={
            <View
              style={{
                width: windowWidth,
                height: 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>khoong co san pham</Text>
            </View>
          }
          renderItem={({ item, index }) => (
            <View style={styles.cardItemContainer}>
              <CardItem
                item={item}
                heightCard={200}
                fontSizeTitle={16}
                fontSizeDes={14}
                numberOfLines={1}
                navigation={navigation}
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <MainLoading height={190} padding={30} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  cardItemContainer: {
    margin: 10,
    flex: 1,
    width: 135,
  },
});
