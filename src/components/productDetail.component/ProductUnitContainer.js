import React from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import RoundedButton from "../RoundedButton";
import { View, StyleSheet, Text } from "react-native";
import { theme } from "../../common/theme";
import { useState } from "react";

const ProductUnitContainer = ({ title, unitText, isEdit }) => {
  const [heart, setHeart] = useState(false);
  return (
    <View style={styles.productUnitContainer}>
      <View>
        <Text style={styles.titleText}>
          {title ? title : "Naturel Red Apple"}
        </Text>
        <Text style={styles.unitText}>
          {unitText ? unitText : "1kg, Price"}
        </Text>
      </View>
      <View>
        {isEdit ? (
          <RoundedButton
            mode='contained'
            onPress={() => console.log("edit product unit Containter")}
            style={styles.buttonItem}>
            <FontAwesome name='edit' size={24} color='black' />
          </RoundedButton>
        ) : (
          <RoundedButton
            mode='contained'
            onPress={() => setHeart(!heart)}
            style={styles.buttonItem}>
            {heart ? (
              <AntDesign name='heart' size={24} color='pink' />
            ) : (
              <AntDesign name='hearto' size={24} color='black' />
            )}
          </RoundedButton>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productUnitContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingVertical: "5%",
  },
  titleText: {
    fontFamily: "gilroy-bold",
    fontSize: 24,
    color: "#181725",
  },
  unitText: {
    fontFamily: "gilroy-light",
    fontSize: 14,
    color: "#7C7C7C",
  },
  buttonItem: {
    borderWidth: 0,
    backgroundColor: theme.backgrounds.white,
  },
});

export default ProductUnitContainer;
