import React, { memo } from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { theme } from "../../common/theme";

// type Props = {
//   children: React.ReactNode;
// };

const Background = ({ children }) => (
  <View style={styles.background}>
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.backgrounds.white,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: Dimensions.get("screen").height * 0.12,
  },
  container: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default memo(Background);
