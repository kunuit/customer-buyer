import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { theme } from "../../common/theme";
import Button from "../Button";
import Colors from "../../constants/colors";

const ButtonBottomAdmin = () => {
  return (
    <View style={styles.root}>
      <Button
        mode='contained'
        onPress={() => console.log("Update Item")}
        style={styles.buttonUpdate}>
        <Text style={styles.buttonText}>Update</Text>
      </Button>

      <Button
        mode='contained'
        onPress={() => console.log("Delete Item")}
        style={styles.buttonDelete}>
        <Text style={styles.buttonText}>Delete</Text>
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    width: "90%",
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.08,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonUpdate: {
    width: "50%",
    backgroundColor: theme.colors.primary,
    marginRight: "2%",
  },
  buttonDelete: {
    width: "50%",
    backgroundColor: theme.colors.notpink,
    marginLeft: "2%",
  },
  buttonText: {
    fontFamily: "gilroy-bold",
    fontSize: 15,
    color: theme.backgrounds.white,
  },
});

export default ButtonBottomAdmin;
