import React from "react";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { theme } from "../../common/theme";

export const CategoryNameList = ({
  item,
  index,
  onChangeCategory,
  activeId,
  ...props
}) => {
  return (
    <TouchableHighlight
      underlayColor={theme.backgrounds.white}
      onPress={() => onChangeCategory(item.id)}
    >
      <View style={[styles.root, activeId == item.id && styles.active]}>
        <Text
          style={[styles.text, activeId == item.id ? styles.textActive : {}]}
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
