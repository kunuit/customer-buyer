import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { theme } from "../../../../common/theme";
import ButtonBack from "../../../../components/ButtonBack";

const CartDetail = ({ navigation }) => {
  return (
    <View style={styles.root}>
      <Text>Cart detail</Text>
      <ButtonBack navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.backgrounds.white,
    height: "100%",
    alignItems: "center",
  },
});

export default CartDetail;
