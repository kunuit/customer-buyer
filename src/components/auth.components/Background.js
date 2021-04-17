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
import ButtonBack from "../ButtonBack";

const Background = ({
  children,
  isButtonBack = false,
  navigation,
  relative = false,
}) => (
  <View style={styles.background}>
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ alignItems: "center" }}>{children}</View>
      </ScrollView>
    </SafeAreaView>
    {isButtonBack ? <ButtonBack navigation={navigation} /> : <></>}
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: theme.backgrounds.white,
    justifyContent: "center",
    alignItems: "center",
    // paddingBottom: Dimensions.get("window").height * 0.09 + 37,
  },
  container: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default memo(Background);
