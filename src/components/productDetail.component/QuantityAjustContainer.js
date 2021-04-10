import React, { useState } from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import RoundedButton from "../RoundedButton";
import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";
import NumberFormat from "react-number-format";

// class QuantityAjustContainer extends React.Component {
const QuantityAjustContainer = ({ price, isEdit }) => {
  const [productCount, setProductCount] = useState(1);

  return (
    <View style={styles.quantityAjustContainer}>
      {isEdit ? (
        <></>
      ) : (
        <View style={styles.quantityAjustButton}>
          <RoundedButton
            onPress={() => {
              if (productCount > 1) {
                setProductCount(productCount - 1);
              }
            }}
            style={[styles.buttonItem, styles.buttonClickable]}>
            <Entypo name='minus' size={25} color={Colors.gray} />
          </RoundedButton>
          <View style={{ marginLeft: 12, marginRight: 12 }}>
            <RoundedButton>
              <Text>{productCount}</Text>
            </RoundedButton>
          </View>
          <RoundedButton
            onPress={() => setProductCount(productCount + 1)}
            style={[styles.buttonItem, styles.buttonClickable]}>
            <Entypo name='plus' size={25} color={Colors.gray} />
          </RoundedButton>
        </View>
      )}
      <NumberFormat
        value={Math.round(price * 100) / 100}
        displayType={"text"}
        thousandSeparator={true}
        // suffix={" vnd"}
        prefix={"$"}
        renderText={(formattedValue) => (
          <Text style={styles.titleText}>{formattedValue}</Text>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  quantityAjustContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingBottom: "5%",
  },
  quantityAjustButton: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonItem: {
    borderWidth: 0,
  },
  buttonClickable: {},
  titleText: {
    fontFamily: "gilroy-bold",
    fontSize: 24,
    color: "#181725",
  },
});
export default QuantityAjustContainer;
