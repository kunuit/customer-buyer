import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { theme } from "../../common/theme";
import RoundedButton from "../RoundedButton";
import { AntDesign, FontAwesome5, Zocial } from "@expo/vector-icons";

const ButtonBottomAdmin = ({ onDeletedProduct, isAdmin, navigation }) => {
  return (
    <View style={[styles.root, { borderRadius: isAdmin ? 50 : 15 }]}>
      {isAdmin ? (
        <RoundedButton
          mode="contained"
          onPress={() => onDeletedProduct()}
          style={[styles.buttonItem, { marginVertical: 0 }]}
        >
          <FontAwesome5 name="trash" size={20} color={theme.colors.notpink} />
        </RoundedButton>
      ) : (
        <View>
          <RoundedButton
            mode="contained"
            onPress={() => navigation.navigate("Cart")}
            style={styles.buttonItem}
          >
            <Zocial name="cart" size={20} color={theme.colors.notBlack} />
          </RoundedButton>
          <RoundedButton
            mode="contained"
            onPress={() => navigation.navigate("Messenger Detail")}
            style={styles.buttonItem}
          >
            <AntDesign
              name="message1"
              size={20}
              color={theme.colors.notBlack}
            />
          </RoundedButton>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    position: "absolute",
    top: 15,
    right: 18,
    padding: 3,
    backgroundColor: theme.backgrounds.buttonBack,
  },
  buttonItem: {
    borderWidth: 0,
    marginVertical: 5,
  },
});

export default ButtonBottomAdmin;
