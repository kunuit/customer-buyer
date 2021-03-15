import React from 'react';
import Constants from 'expo-constants';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';

import BottomTab from './src/containers/Tabs/BottomTab';
import { theme } from './src/common/theme';
import { reducer } from './src/reducers/stateInReducers';

const Router = createStackNavigator();
const store = createStore(reducer);


function App() {

  return (
    <View style={styles.container}>
      {/* <Router.Navigator initialRouteName='HomeScreen' headerMode='none'> */}
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
