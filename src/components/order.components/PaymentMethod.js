import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NumberFormat from "react-number-format";
import { theme } from "../../common/theme";

export const PaymentMethod = ({ totalPrice }) => {
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <View style={styles.paymentMethod}>
          <MaterialIcons
            name="payment"
            size={24}
            color={theme.colors.primary}
          />
          <Text style={[styles.textTitle]}> Payment method</Text>
          <View style={styles.elementRight}>
            <Text style={[styles.text]}>COD</Text>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <View style={styles.priceView}>
        <View style={styles.elements}>
          <Text style={[styles.text]}>The good cost total</Text>
          <View style={styles.elementRight}>
            <NumberFormat
              value={totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              // suffix={" vnd"}
              prefix={"$"}
              renderText={(formattedValue) => (
                <Text style={[styles.numberText]}>{formattedValue}</Text>
              )}
            />
          </View>
        </View>
        <View>
          <View style={styles.elements}>
            <Text style={[styles.text]}>Transist fee total</Text>
            <View style={styles.elementRight}>
              <NumberFormat
                value={5}
                displayType={"text"}
                thousandSeparator={true}
                // suffix={" vnd"}
                prefix={"$"}
                renderText={(formattedValue) => (
                  <Text style={[styles.numberText]}>{formattedValue}</Text>
                )}
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.elements}>
            <Text style={[styles.text, { fontSize: 20 }]}>Price total</Text>
            <View style={styles.elementRight}>
              <NumberFormat
                value={totalPrice + 5}
                displayType={"text"}
                thousandSeparator={true}
                // suffix={" vnd"}
                prefix={"$"}
                renderText={(formattedValue) => (
                  <Text
                    style={[
                      styles.numberText,
                      { fontSize: 20, color: theme.colors.primary },
                    ]}
                  >
                    {formattedValue}
                  </Text>
                )}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // paddingVertical: 10,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderTopWidth: 8,
    borderTopColor: theme.backgrounds.paper,
  },
  paymentMethod: {
    paddingHorizontal: 10,
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  elementRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  textTitle: {
    marginLeft: 5,
    fontFamily: "gilroy-medium",
  },
  text: {
    fontFamily: "gilroy-light",
  },
  numberText: {
    fontFamily: "gilroy-medium",
    fontSize: 15,
  },
  elements: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  priceView: {
    marginVertical: 10,
  },
});
