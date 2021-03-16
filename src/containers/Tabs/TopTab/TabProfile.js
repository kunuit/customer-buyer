import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from '../../screens/Profile';
import { ForgotPasswordScreen, HomeScreen, LoginScreen, RegisterScreen } from '../../screens/auth.screens';

const TabTop = createMaterialTopTabNavigator();

const TabProfile = () => {
  const token = 'abc'
  return (
    <TabTop.Navigator tabBar={() => null}>
      {
        !token ?
        <TabTop.Screen name='ProfileMain' component={Profile} />
        :
        <>
          <TabTop.Screen name='HomeScreen' component={HomeScreen} />
          <TabTop.Screen name='LoginScreen' component={LoginScreen} />
          <TabTop.Screen name='RegisterScreen' component={RegisterScreen} />
          <TabTop.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
        </>
      }
      {/* <TabTop.Screen name='Account' component={AccountScreen} /> */}
    </TabTop.Navigator>
  );
}

export default TabProfile;
