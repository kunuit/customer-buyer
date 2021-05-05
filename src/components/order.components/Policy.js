import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../../common/theme";

export const Policy = () => {
  return (
    <View style={styles.root}>
      <MaterialIcons name="policy" size={24} color={theme.colors.primary} />
      <Text style={styles.textTitle}>
        Press "Purchase" is accepted Near's{" "}
        <Text
          style={[
            styles.textTitle,
            {
              padding: 0,
              color: theme.colors.primary,
              alignItems: "flex-end",
            },
          ]}
        >
          policy
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: theme.backgrounds.paper,
    borderTopWidth: 8,
    borderBottomWidth: 8,
    height: 50,
    padding: 5,
    marginBottom: 50,
  },
  textTitle: {
    fontFamily: "gilroy-medium",
    paddingLeft: 3,
  },
});
