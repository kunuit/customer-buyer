import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../common/theme";

// type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({ mode, style, children, ...props }) => (
  <TouchableOpacity
    style={[
      styles.button,
      // mode === 'outlined' && { backgroundColor: theme.backgrounds.white },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 15,
    elevation: 0,
    borderWidth: 0,
    padding: 10,
  },
});

export default memo(Button);
