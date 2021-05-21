import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { theme } from "../../common/theme";

export const CategoryNameList = ({
  item,
  onChangeCategory,
  activeId,
  ...props
}) => {
  return (
    <TouchableHighlight
      underlayColor={theme.backgrounds.white}
      onPress={() => onChangeCategory(item._id)}
    >
      <View style={[styles.root, activeId == item._id && styles.active]}>
        <Text
          style={[styles.text, activeId == item._id ? styles.textActive : {}]}
        >
          {item.name}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    paddingVertical: 5,
    margin: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.colors.lineBorder,
  },
  text: {
    textAlign: "center",
    color: theme.colors.notBlack,
  },
  active: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  textActive: {
    color: theme.backgrounds.white,
  },
});
