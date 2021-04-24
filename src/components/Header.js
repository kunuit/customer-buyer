import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "../common/theme";

// type Props = {
//   children: React.ReactNode,
// };

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    color: theme.colors.primary,
    paddingVertical: 14,
    fontFamily: "gilroy-bold",
  },
});

export default memo(Header);
