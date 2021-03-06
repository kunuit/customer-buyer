import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";
import { theme } from "../../common/theme";

const CardMyProduct = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={{ elevation: 0 }}
      onPress={() => navigation.navigate("Product Detail", item)}
    >
      <View style={styles.root}>
        <Image
          style={{ height: 60, width: 60 }}
          resizeMode="center"
          source={{
            uri: item.imageUrls
              ? item.imageUrls[0]
              : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
          }}
        />
        <View style={{ marginLeft: "5%", flex: 1 }}>
          <Text style={[styles.text, styles.textFont]}>{item.name}</Text>
          <View style={styles.news}>
            <Text style={[styles.variant, styles.textFont]}>vision</Text>
            <Text style={[styles.variant, styles.selling, styles.textFont]}>
              {item.status == 0 ? "New" : "Selling"}
            </Text>
          </View>
          <NumberFormat
            value={Math.round(item.price * 100) / 100}
            displayType={"text"}
            thousandSeparator={true}
            // suffix={" vnd"}
            prefix={"$"}
            renderText={(formattedValue) => (
              <Text style={[{ fontSize: 13, color: "green" }]}>
                {formattedValue}
              </Text>
            )}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: theme.colors.lineBorder,
    borderBottomWidth: 1,
  },
  textFont: {
    fontFamily: "gilroy-medium",
  },
  text: {
    fontSize: 18,
  },
  news: {
    flexDirection: "row",
  },
  variant: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 5,
    marginRight: 5,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    // width: '100%',
  },
  selling: {
    color: "white",
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
});

export default CardMyProduct;
