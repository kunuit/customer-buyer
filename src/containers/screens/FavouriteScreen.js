import React from "react";
import {
  Dimensions,
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";
import Button from "../../components/Button";
import FavouriteItem from "../../components/FavouriteItem";
import Colors from "../../../constants/colors";
const Line = () => {
  return (
    <View
      style={{
        borderBottomColor: Colors.grayWhite,
        borderBottomWidth: 1,
      }}
    />
  );
};
const CartScreen = () => {
  const fakeData = [1, 2, 3, 4, 5, 6, 7];
  return (
    <View style={styles.container}>
      <View style={styles.titleTextContainer}>
        <Text style={styles.titleText}>Favourite</Text>
      </View>
      <FlatList
        style={styles.listCartItemContainer}
        showsVerticalScrollIndicator={false}
        data={fakeData}
        keyExtractor={(item, index) => item.toString()}
        renderItem={({ item }) => (
          <View>
            <FavouriteItem />
            <Line />
          </View>
        )}
      />
      <Button style={{ backgroundColor: Colors.green, width: "90%" }}>
        <Text style={{ color: "white", fontFamily: "gilroy-bold" }}>
          Add All To Cart
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: Dimensions.get("window").width,
    alignItems: "center",
    paddingBottom: "15%",
  },
  listCartItemContainer: {
    width: "90%",
    margin: "auto",
  },
  titleTextContainer: {
    width: "100%",
    borderBottomColor: Colors.grayWhite,
    borderBottomWidth: 1,
    backgroundColor: "white",
    paddingVertical: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "gilroy-bold",
  },
});

export default CartScreen;
