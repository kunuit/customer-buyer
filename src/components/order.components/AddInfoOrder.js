import {
  AntDesign,
  Entypo,
  MaterialCommunityIcons,
  Zocial,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Switch } from "react-native-paper";
import { theme } from "../../common/theme";

export const AddInfoOrder = () => {
  const [message, setMessage] = useState("");
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  return (
    <View style={styles.root}>
      <View style={styles.element}>
        <MaterialCommunityIcons
          name="message-bulleted"
          size={24}
          color={theme.colors.primary}
          style={styles.icon}
        />
        <Text style={styles.textTitle}> Message </Text>
        <View style={styles.textInput}>
          <TextInput
            onChangeText={(text) => setMessage(text)}
            value={message}
            placeholder="Note for shop..."
            style={styles.text}
            textAlign="right"
            sty
          />
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.element}>
          <Entypo name="ticket" size={24} color={theme.colors.primary} />
          <Text style={styles.textTitle}> Voucher </Text>
          <View style={styles.voucherRight}>
            <Text style={styles.text}>Choose or enter voucher</Text>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <View style={[styles.element, { borderBottomWidth: 0 }]}>
        <Zocial name="bitcoin" size={24} color={theme.colors.primary} />
        <Text style={styles.textTitle}> Use 2512 coin shop </Text>
        <View style={styles.voucherRight}>
          <Text style={styles.text}>[-300] </Text>
          <Switch
            value={isSwitchOn}
            onValueChange={() => setIsSwitchOn(!isSwitchOn)}
            color={theme.colors.primary}
          />
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
  element: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    borderBottomWidth: 0.5,
    height: 50,
    borderBottomColor: theme.colors.lineBorder,
  },
  textInput: {
    flex: 1,
    backgroundColor: theme.backgrounds.white,
  },

  textTitle: {
    fontFamily: "gilroy-medium",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
  },
  text: {
    fontFamily: "gilroy-light",
  },
  voucherRight: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
