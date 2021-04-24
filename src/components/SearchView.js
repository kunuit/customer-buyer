import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { theme } from "../common/theme";

const SearchView = ({ holSearch, typeAction }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  useEffect(() => {
    if (typeAction && searchQuery) {
      dispatch({
        type: typeAction,
        payload: {
          data: searchQuery,
        },
      });
    }
  }, [searchQuery]);

  return (
    <View style={styles.searchContainer}>
      <Searchbar
        placeholder={`Search ${holSearch ? holSearch : "Store"}`}
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBar}
        clearIcon={() => <MaterialIcons name="clear" size={20} color="black" />}
        icon={() => <MaterialIcons name="search" size={20} color="black" />}
        inputStyle={[
          { fontFamily: "gilroy-bold" },
          { fontSize: 13 },
          { borderWidth: 0 },
        ]}
        on
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    alignItems: "center",
    width: "100%",
    borderColor: theme.backgrounds.white,
    borderBottomColor: theme.colors.lineBorder,
    borderWidth: 1,
  },
  searchBar: {
    width: "90%",
    backgroundColor: theme.backgrounds.paper,
    borderRadius: 15,
    marginBottom: "2%",
    elevation: 0,
  },
});

export default SearchView;
