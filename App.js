import React from "react";

import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, applyMiddleware, compose } from "redux";

import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/sagas";
import { Provider, useDispatch } from "react-redux";
import { useFonts } from "expo-font";

import { theme } from "./src/common/theme";
import reducers from "./src/reducers";
import Toast from "react-native-toast-message";
import General from "./src/containers/Tabs/General";

// create redux redux-saga redux-dev-tool for browser
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create redux redux-saga for mobile
const composeEnhancersRNDebugger =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [applyMiddleware(...middleware)];
const store = createStore(reducers, composeEnhancersRNDebugger(...enhancers));

sagaMiddleware.run(rootSaga);

const App = () => {
  let [fontsLoaded] = useFonts({
    "gilroy-medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "gilroy-light": require("./assets/fonts/Gilroy-Light.otf"),
    "gilroy-bold": require("./assets/fonts/Gilroy-ExtraBold.otf"),
    "gilroy-semiBold": require("./assets/fonts/Gilroy-SemiBold.ttf"),
  });
  if (!fontsLoaded) return <View />;

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor={theme.backgrounds.white}
        barStyle='dark-content'
      />
      <General />

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgrounds.white,
  },
});
