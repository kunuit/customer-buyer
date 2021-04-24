import React from "react";
import { Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { theme } from "../../common/theme";

export default function mainLoading({ height, padding, styleLoading }) {
  return (
    <View style={[{ flex: 1, padding: padding, height: height }, styleLoading]}>
      <ActivityIndicator
        animating={true}
        size="small"
        color={theme.colors.primary}
      />
    </View>
  );
}
