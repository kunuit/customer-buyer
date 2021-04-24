import React, { useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import NumberFormat from "react-number-format";
import RoundedButton from "../RoundedButton";
import { theme } from "../../common/theme";
import { FontAwesome } from "@expo/vector-icons";

const CardWarehouseItem = ({ item, navigation }) => {
  const [iconArchived, setIconArchived] = useState(false);
  return (
    <TouchableOpacity
      style={{ elevation: 0 }}
      onPress={() => setIconArchived(true)}>
      <View style={styles.root}>
        <Image
          style={{ height: 60, width: 60, borderRadius: 30 }}
          source={{
            uri:
              "https://s3-hcm-r1.longvan.net/doanweb/2618d06e-1c1a-4493-a9be-e9b42e369fb9202039251257vn000ee3w00-5.png",
          }}
        />
        <View style={{ marginLeft: "5%", flex: 1 }}>
          <Text style={[styles.text, styles.textFont]}>
            Vans Authentic White
          </Text>
          <View style={styles.news}>
            <Text style={[styles.variant, styles.textFont]}>25/12/2000</Text>
            <Text style={[styles.variant, styles.selling, styles.textFont]}>
              300
            </Text>
          </View>
          <NumberFormat
            value={1200000}
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
        <View style={{ width: "11%" }}>
          {iconArchived ? (
            <RoundedButton
              mode='contained'
              onPress={() => setIconArchived(false)}
              style={styles.buttonItem}>
              <FontAwesome name='edit' size={24} color={theme.colors.notpink} />
            </RoundedButton>
          ) : (
            <></>
          )}
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
  buttonItem: {
    borderWidth: 0,
  },
});

export default CardWarehouseItem;
