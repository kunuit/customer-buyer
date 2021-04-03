import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";
import { showToast } from "../../common/Layout/toast.helper";
import { theme } from "../../common/theme";

const InfoCard = (props) => {
  const { nameIcon, name } = props;
  return (
    <TouchableOpacity
      style={{ elevation: 0 }}
      onPress={() => showToast({ title: name, type: "info", message: name })}>
      <View style={styles.root}>
        <Icon name={nameIcon} size={30} color={theme.colors.notBlack} />
        <Text style={styles.nameItem}>{name}</Text>
        <Icon name='chevron-forward' size={20} color={theme.colors.notBlack} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: theme.colors.lineBorder,
    borderBottomWidth: 1,
  },
  nameItem: {
    flex: 1,
    marginLeft: 20,
    fontFamily: "gilroy-medium",
    fontSize: 17,
    color: theme.colors.notBlack,
  },
});

export default InfoCard;
