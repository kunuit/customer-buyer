import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";
import { theme } from "../common/theme";

const GroceryItem = ({ item, navigation }) => {
  return (
    <TouchableHighlight
      underlayColor={theme.backgrounds.white}
      onPress={() => {
        navigation.navigate("Category Detail", item._id);
      }}
    >
      <View
        style={[
          styles.cardContainer,
          { backgroundColor: item.color, borderColor: item.color },
        ]}
      >
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={{
              uri: item.imageUrl,
            }}
          />
        </View>
        <View style={styles.cardDetailContainer}>
          <Text numberOfLines={2} style={styles.titleText}>
            {`${item.name}`}
          </Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 10,
    height: 100,
    width: 200,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardImageContainer: {
    height: "100%",
    width: "50%",
  },
  cardImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  cardDetailContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontFamily: "gilroy-bold",
    fontSize: 14,
    color: "black",
  },
});

export default GroceryItem;
