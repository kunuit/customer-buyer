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
import Colors from "../../constants/colors";
const Explore = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.exploreContainer}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>Find Products</Text>
      </View>
      <View style={styles.searchContainer}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  searchContainer: {
    alignItems: "center",
    width: "100%",
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
    marginVertical: "3%",
  },
  titleTextContainer: {
    alignItems: "center",
    width: "100%",
    borderBottomColor: Colors.grayWhite,
    borderBottomWidth: 1,
    backgroundColor: "white",
    paddingVertical: 20,
  },
});
export default Explore;
