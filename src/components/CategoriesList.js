import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  FlatList,
  Dimensions,
} from "react-native";
import CategoryItem from "../components/CategoryItem";
import Colors from "../constants/colors";
import { itemData } from "../components/data/data";
import Button from "../components/Button";
const CategoriesList = (props) => {
  const { categories } = useSelector((state) => state);
  const dispatch = useDispatch();
  // console.log(categories);
  const dispatchGetAllCategories = () =>
    dispatch({
      type: "FETCH_CATEGORIES",
    });
  const [item, setItem] = useState(itemData);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={item}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cardItemContainer}>
            <Button
              style={[
                styles.cardContainer,
                {
                  backgroundColor: `${item.itemColor}`,
                  borderColor: `${item.itemColor}`,
                },
              ]}
            >
              <View style={{ flex: 1 }}>
                <View style={styles.cardImageContainer}>
                  <Image
                    style={styles.cardImage}
                    source={{
                      uri: `${item.itemImage}`,
                    }}
                  />
                </View>
                <View style={styles.cardDetailContainer}>
                  <Text numberOfLines={2} style={styles.titleText}>
                    {item.nameItem}
                  </Text>
                </View>
              </View>
            </Button>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "95%",
    margin: "auto",
    paddingBottom: Dimensions.get("window").height * 0.09,
  },
  cardItemContainer: {
    margin: 10,
    flex: 1,
  },
  cardContainer: {
    padding: 10,
    height: 230,
    borderColor: "#53B174",
    // backgroundColor: "rgba(83, 177, 117, 0.1)",
    borderRadius: 20,
    borderWidth: 1,
  },
  cardImageContainer: {
    marginBottom: 20,
    height: "45%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cardDetailContainer: {
    flexDirection: "column",
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "black",
    height: "auto",
  },
});

export default CategoriesList;
