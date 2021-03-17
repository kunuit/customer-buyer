import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../common/theme";

// type Props = React.ComponentProps<typeof PaperButton>;

const Button = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === "outlined" && { backgroundColor: theme.backgrounds.white },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    borderRadius: 15,
    elevation: 0,
    borderWidth: 0,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    textTransform: "none",
    // fontFamily: 'gilroy-bold'
  },
});

export default memo(Button);
