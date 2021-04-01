import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";
import { theme } from "../../common/theme";

const CardMyCart = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={{ elevation: 0 }}
      onPress={() => navigation.navigate("Cart Detail")}>
      <View style={styles.root}>
        <Image
          style={{ height: 60, width: 60, borderRadius: 30 }}
          source={{
            uri:
              "https://www.clipartmax.com/png/full/250-2502583_danger31-diddy-kong-transparent.png",
          }}
        />
        <View style={{ marginLeft: "5%", flex: 1 }}>
          <Text style={[styles.text, styles.textFont]}>Kong customer</Text>
          <View style={styles.news}>
            <Text style={[styles.variant, styles.textFont]}>25/12/2000</Text>
            <Text style={[styles.variant, styles.selling, styles.textFont]}>
              New order
            </Text>
          </View>
          <NumberFormat
            value={5000000}
            displayType={"text"}
            thousandSeparator={true}
            suffix={" vnd"}
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
    width: "90%",
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
    textAlign: "center",
    paddingHorizontal: 5,
    marginRight: 5,
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  selling: {
    color: "white",
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
});

export default CardMyCart;
