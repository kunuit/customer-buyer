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
  console.log(activeId, "cjeck id");
  return index == 0 ? (
    <View style={{ flexDirection: "row" }}>
      <TouchableHighlight
        underlayColor={theme.backgrounds.white}
        onPress={() => onChangeCategory(-1)}
      >
        <View style={[styles.root, activeId == -1 && styles.active]}>
          <Text style={[styles.text, activeId == -1 ? styles.textActive : {}]}>
            All
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={theme.backgrounds.white}
        onPress={() => onChangeCategory(item.id)}
      >
        <View style={[styles.root, activeId == item.id && styles.active]}>
          <Text
            style={[styles.text, activeId == item.id ? styles.textActive : {}]}
          >
            {item.nameItem}
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  ) : (
    <TouchableHighlight
      underlayColor={theme.backgrounds.white}
      onPress={() => onChangeCategory(item.id)}
    >
      <View style={[styles.root, activeId == item.id && styles.active]}>
        <Text
          style={[styles.text, activeId == item.id ? styles.textActive : {}]}
        >
          {item.nameItem}
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
