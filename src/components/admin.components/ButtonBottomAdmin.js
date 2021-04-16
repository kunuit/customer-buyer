import React from "react";
import { View, StyleSheet } from "react-native";
import { theme } from "../../common/theme";
import RoundedButton from "../RoundedButton";
import { FontAwesome5, Zocial } from "@expo/vector-icons";

const ButtonBottomAdmin = ({ onDeletedProduct, isAdmin, navigation }) => {
  return (
    <View style={styles.root}>
      {isAdmin ? (
        <RoundedButton
          mode="contained"
          onPress={() => onDeletedProduct()}
          style={styles.buttonItem}
        >
          <FontAwesome5 name="trash" size={24} color={theme.colors.notpink} />
        </RoundedButton>
      ) : (
        <RoundedButton
          mode="contained"
          onPress={() => navigation.navigate("Cart")}
          style={styles.buttonItem}
        >
          <Zocial name="cart" size={25} color={theme.colors.notBlack} />
        </RoundedButton>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 15,
    right: 18,
    padding: 5,
    borderRadius: 25,
    backgroundColor: theme.backgrounds.buttonBack,
  },
  buttonItem: {
    borderWidth: 0,
  },
});

export default ButtonBottomAdmin;
