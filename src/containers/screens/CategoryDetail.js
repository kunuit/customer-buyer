import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { theme } from "../../common/theme";
import ListCardItem from "../../components/ListCardItem";
import SearchView from "../../components/SearchView";
import TitleScreen from "../../components/TitleScreen";

export default function CategoryDetail({ navigation, route }) {
  const item = route.params;
  const { productByCategory } = useSelector((state) => state.products);
  return (
    <View style={styles.root}>
      <TitleScreen isBorder={false} title={item.name} navigation={navigation} />
      <SearchView holSearch={item.name} />
      <ListCardItem
        navigation={navigation}
        products={productByCategory[item.id]}
        isColumn={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.backgrounds.white,
  },
});
