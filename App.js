
import React from 'react';
import Constants from 'expo-constants';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import BottomTab from './src/containers/Tabs/BottomTab';
import { theme } from './src/common/theme';
import { reducer } from './src/reducers/stateInReducers';

const Router = createStackNavigator();
const store = createStore(reducer);




function App() {
  let [fontsLoaded] = useFonts({
    "gilroy-light": require("./assets/fonts/Gilroy-Light.otf"),
    "gilroy-bold": require("./assets/fonts/Gilroy-ExtraBold.otf"),
  });
  if (!fontsLoaded) return <View />;
  return (
    <View style={styles.container}>
      <Router.Navigator initialRouteName="MainUX" headerMode='none'>
            <Router.Screen name='MainUX' component={BottomTab} />
            <Router.Screen name='asd' component={BottomTab} />
      </Router.Navigator>
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
    backgroundColor: theme.backgrounds.white,
    paddingTop: Constants.statusBarHeight,
  },
});
