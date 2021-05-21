import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import RequireLogin from "./src/components/RequireLogin";
import { windowHeight } from "./src/common/Dimensions";
import { useFonts } from "expo-font";
import { theme } from "./src/common/theme";
import General from "./src/containers/Tabs/General";
import { useDispatch, useSelector } from "react-redux";
import { setTokenHeaderSevice } from "./src/apis/auth.api";
import { typeAuths } from "./src/sagas/auth.saga";
import Toast from "react-native-toast-message";

const AppDetail = () => {
  const dispatch = useDispatch();
  const { isRequireLogin, token } = useSelector((state) => state.auth);
  const bs = useRef(null);

  useEffect(() => {
    console.log(`token in AppDetails`, token);
    setTokenHeaderSevice(token);
  }, [token]);

  useEffect(() => {
    console.log(`isRequireLogin`, isRequireLogin);
    if (isRequireLogin) {
      console.log("here");
      bs.current.snapTo(0);
      dispatch({
        type: typeAuths.requireLogin,
        payload: {
          statusRequireLogin: false,
        },
      });
    }
  }, [isRequireLogin]);

  let [fontsLoaded] = useFonts({
    "gilroy-medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "gilroy-light": require("./assets/fonts/Gilroy-Light.otf"),
    "gilroy-bold": require("./assets/fonts/Gilroy-ExtraBold.otf"),
    "gilroy-semiBold": require("./assets/fonts/Gilroy-SemiBold.ttf"),
  });
  if (!fontsLoaded) return <View />;

  // const [showModal, setShowModal] = useState(false);
  const fall = new Animated.Value(1);
  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ height: 130 }}>{/* <RequireLogin /> */}</View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  // renders
  return (
    <View
      style={[
        styles.container,
        // { opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)) },
      ]}
    >
      <BottomSheet
        ref={bs}
        snapPoints={["20%", "-40%"]}
        renderContent={() => renderInner()}
        renderHeader={() => renderHeader()}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <StatusBar
        animated={true}
        backgroundColor={theme.backgrounds.white}
        barStyle="dark-content"
      />
      <General />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },

  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
    // justifyContent: "center",
    // alignItems: "center",
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 3,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});

export default AppDetail;
