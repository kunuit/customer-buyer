import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { useSelector } from "react-redux";
import { windowWidth } from "../common/Dimensions";
import { statusFilter } from "../sagas/utilSagas.saga";

import CardItem from "./CardItem";
import MainLoading from "./Loader/MainLoading";

export const ProductListWithCondition = ({ activeId, navigation }) => {
  const { data, isLoadingFilterByCategory, productByCategory } = useSelector(
    (state) => state.products
  );
  console.log(`isLoadingFilterByCategory`, isLoadingFilterByCategory);
  return (
    <View style={styles.root}>
      {(!isLoadingFilterByCategory && !!productByCategory[activeId]) ||
      activeId == statusFilter.default ? (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={
            activeId == statusFilter.default
              ? data.slice(0, 4)
              : productByCategory[activeId].products.slice(0, 4)
          }
          ListEmptyComponent={
            <View
              style={{
                width: windowWidth,
                height: 200,
                margin: 10,
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
        <View
          style={{
            width: windowWidth,
            height: 200,
            margin: 10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MainLoading height={190} padding={30} />
        </View>
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
