import React from "react";
import { Text } from "react-native";
import { View, StyleSheet, FlatList, Dimensions } from "react-native";
import { useSelector } from "react-redux";
import { multipleRowsFlatListFormat } from "../common/format/FlatListDataFormat";
import CardItem from "../components/CardItem";

const ListCardItem = ({ navigation, products, isColumn }) => {
  const { data } = useSelector((state) => state.products);

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              height: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>khoong co san pham</Text>
          </View>
        }
        data={
          isColumn && products
            ? multipleRowsFlatListFormat(products, 2)
            : products
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) =>
          item == "empty" ? (
            <View style={styles.cardItemContainer}></View>
          ) : (
            <View style={styles.cardItemContainer}>
              <CardItem item={item} navigation={navigation} />
            </View>
          )
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    // paddingBottom: Dimensions.get("window").height * 0.09,
  },
  cardItemContainer: {
    margin: 10,
    flex: 1,
  },
});

export default ListCardItem;
