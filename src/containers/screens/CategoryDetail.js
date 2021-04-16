import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../../common/theme";
import SearchView from "../../components/SearchView";
import TitleScreen from "../../components/TitleScreen";

export default function CategoryDetail({ navigation, route }) {
  const item = route.params;
  return (
    <View style={styles.root}>
      <TitleScreen
        isBorder={false}
        title={item.nameItem}
        navigation={navigation}
      />
      <SearchView holSearch={item.nameItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.backgrounds.white,
  },
});
