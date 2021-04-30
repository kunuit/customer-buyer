import React from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../common/theme";
import ListCardItem from "../../components/ListCardItem";
import SearchView from "../../components/SearchView";
import TitleScreen from "../../components/TitleScreen";
import { typeProducts } from "../../sagas/product.saga";

export default function CategoryDetail({ navigation, route }) {
  const item = route.params;
  const { productByCategory } = useSelector((state) => state.products);
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch({type: typeProducts.})
  // }, [])
  return (
    <View style={styles.root}>
      <TitleScreen
        isBorder={false}
        title={productByCategory[item].name}
        navigation={navigation}
      />
      <SearchView holSearch={productByCategory[item].name} />
      <ListCardItem
        navigation={navigation}
        products={productByCategory[item].products}
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
