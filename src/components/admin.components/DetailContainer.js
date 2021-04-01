import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { theme } from "../../common/theme";
import RoundedButton from "../RoundedButton";

const DetailContainer = ({ title, info }) => {
  return (
    <View style={styles.root}>
      <View style={styles.descriptionTittleContainer}>
        <Text style={styles.descriptionTittle}>
          {title ? title : "Product Detail"}
        </Text>
        <RoundedButton
          mode='contained'
          onPress={() => console.log("edit description supplier")}
          style={styles.buttonItem}>
          <FontAwesome name='edit' size={24} color='black' />
        </RoundedButton>
      </View>
      <Text style={styles.descriptionText}>
        {`Address: ${info.address ? info.address : ""}
Phone: ${info.phone ? info.phone : ""}
Email: ${info.email ? info.email : ""}
Representation: ${info.representation ? info.representation : ""}
        `}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: "5%",
    borderTopWidth: 1,
    borderTopColor: "rgba(226, 226, 226, 0.7)",
  },
  descriptionTittleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "5%",
  },
  descriptionTittle: {
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "#181725",
  },
  buttonItem: {
    borderWidth: 0,
    // backgroundColor: theme.backgrounds.white,
  },
  descriptionText: {
    fontFamily: "gilroy-light",
    fontSize: 14,
    color: "#7C7C7C",
    paddingBottom: "5%",
  },
});

export default DetailContainer;
