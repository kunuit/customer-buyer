import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { Text, View } from "react-native";
import { FAB } from "react-native-paper";
import { theme } from "../../../../common/theme";
import CardMySupplier from "../../../../components/admin.components/CardMySupplier.admin";
import SearchView from "../../../../components/SearchView";
import TitleScreen from "../../../../components/TitleScreen";

const SupplierAdmin = ({ navigation }) => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <SafeAreaView style={styles.exploreContainer}>
      <TitleScreen isBorder={false}>My Suppliers</TitleScreen>

      <SearchView holSearch='my supplier' />

      <FlatList
        style={styles.listCardItemContainer}
        showsVerticalScrollIndicator={false}
        data={fakeData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardMySupplier item={item} navigation={navigation} />
        )}
      />

      <FAB
        onPress={() => navigation.navigate("Create Supplier")}
        style={styles.fab}
        small={false}
        theme={{ colors: { accent: theme.colors.primary } }}
        icon='plus'
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: Dimensions.get("window").height * 0.08,
  },
  listCardItemContainer: {
    marginBottom: Dimensions.get("window").height * 0.09,
  },
});

export default SupplierAdmin;
