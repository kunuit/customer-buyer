import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";
import { theme } from "../../common/theme";

const CardMySupplier = ({ item, navigation }) => {
  return (
    <TouchableOpacity
      style={{ elevation: 0 }}
      onPress={() => navigation.navigate("Supplier Detail", item)}
    >
      <View style={styles.root}>
        <Image
          style={{ height: 60, width: 60, borderRadius: 30 }}
          resizeMode="center"
          source={{
            uri: item.imageUrl,
          }}
        />
        <View style={{ marginLeft: "5%", flex: 1 }}>
          <Text style={[styles.text, styles.textFont]}>{item.name}</Text>
          <View style={styles.news}>
            <Text style={[styles.variant, styles.textFont]}>
              <NumberFormat
                value={item.phone}
                displayType={"text"}
                format="### ### ## ##"
                renderText={(formattedValue) => <Text>{formattedValue}</Text>}
              />
            </Text>
            <Text style={[styles.variant, styles.selling, styles.textFont]}>
              {item.status == 0 ? "Active" : "Pending"}
            </Text>
          </View>
          <Text style={[{ fontSize: 13, color: "green" }, styles.textFont]}>
            {item.representation}
          </Text>
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

export default CardMySupplier;
