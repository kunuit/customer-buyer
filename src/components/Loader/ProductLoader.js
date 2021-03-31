import React from "react";
import { FlatList, View, Dimensions } from "react-native";
import ProductItem from "./ProductItem";
const MyLoader = (props) => {
  const items = [1, 2, 3, 4, 5, 6];
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: Dimensions.get("window").height * 0.09,
      }}
    >
      <FlatList
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={items}
        renderItem={(item, index) => (
          <ProductItem style={{ margin: 5, flex: 1 }} />
        )}
      />
    </View>
  );
};

export default MyLoader;
