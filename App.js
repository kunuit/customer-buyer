import React from "react";
import Constants from "expo-constants";

import { Dimensions, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createStore, applyMiddleware, compose } from "redux";
// import {
//   composeWithDevTools,
//   devToolsEnhancer,
// } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./src/sagas";
import { Provider, useSelector } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import CardItem from "./src/components/CardItem";
import MainUX from "./src/containers/Tabs/BottomTab/mainUX";
import AdminUX from "./src/containers/Tabs/BottomTab/adminUX";
import { theme } from "./src/common/theme";
import reducers from "./src/reducers";
import Toast from "react-native-toast-message";

const Router = createStackNavigator();

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

function App() {
  const { isAdminLogin } = useSelector((state) => state.auth);
  let [fontsLoaded] = useFonts({
    "gilroy-medium": require("./assets/fonts/Gilroy-Medium.ttf"),
    "gilroy-light": require("./assets/fonts/Gilroy-Light.otf"),
    "gilroy-bold": require("./assets/fonts/Gilroy-ExtraBold.otf"),
    "gilroy-semiBold": require("./assets/fonts/Gilroy-SemiBold.ttf"),
  });
  if (!fontsLoaded) return <View />;

  return (
    <View style={styles.container}>
      {/* <Router.Navigator headerMode='none'>
        {isAdminLogin ? (
          <Router.Screen name='AdminUX' component={AdminUX} />
        ) : (
          <Router.Screen name='MainUX' component={MainUX} />
        )}
      </Router.Navigator> */}
      {isAdminLogin ? <AdminUX /> : <MainUX />}

      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

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
    backgroundColor: theme.backgrounds.statusBar,
    paddingTop: Constants.statusBarHeight,
  },
});
