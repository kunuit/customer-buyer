import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { theme } from "../../common/theme";
import RoundedButton from "../RoundedButton";
import Colors from "../../constants/colors";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

const ButtonBottomAdmin = ({ onDeletedProduct }) => {
  return (
    <View style={styles.root}>
      {/* <Button
        mode='contained'
        onPress={() => console.log("Update Item")}
        style={styles.buttonUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </Button> */}

      <RoundedButton
        mode="contained"
        onPress={() => onDeletedProduct()}
        style={styles.buttonItem}
      >
        <FontAwesome5 name="trash" size={24} color={theme.colors.notpink} />
      </RoundedButton>

      {/* <Button
        mode='contained'
        onPress={() => console.log("Delete Item")}
        style={styles.buttonDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </Button> */}
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
