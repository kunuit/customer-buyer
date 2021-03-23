import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import CategoriesList from "../../components/CategoriesList";
import { Searchbar } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import ListCardItem from "../../components/ListCardItem";
const Explore = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.exploreContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchContainer}>
          <Text style={styles.titleText}>Find Products</Text>
          <Searchbar
            placeholder="Search Store"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={styles.searchBar}
            clearIcon={() => (
              <MaterialIcons name="clear" size={20} color="black" />
            )}
            icon={() => <MaterialIcons name="search" size={20} color="black" />}
            inputStyle={[
              { fontFamily: "gilroy-bold" },
              { fontSize: 13 },
              { borderWidth: 0 },
            ]}
            on
          />
        </View>
        {searchQuery == "" ? <CategoriesList /> : <ListCardItem />}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  searchContainer: {
    alignItems: "center",
    width: "100%",
    height: Dimensions.get("screen") * 0.3,
    paddingTop: "10%",
  },
  titleText: {
    fontFamily: "gilroy-bold",
    fontSize: 20,
    color: "#181725",
  },
  searchBar: {
    width: "90%",
    backgroundColor: "#F2F3F2",
    borderRadius: 15,
    marginVertical: "5%",
  },
});
export default Explore;
