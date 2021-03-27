import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Profile from "../../screens/Profile";
import {
  ForgotPasswordScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
} from "../../screens/auth.screens";
import { useSelector } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

// const TabTop = createMaterialTopTabNavigator();

const TabTop = createStackNavigator();

const TabProfile = () => {
  const { isLogin } = useSelector((state) => state.auth);

  return (
    <TabTop.Navigator headerMode='none'>
      {isLogin ? (
        <TabTop.Screen name='ProfileMain' component={Profile} />
      ) : (
        <>
          <TabTop.Screen name='HomeScreen' component={HomeScreen} />
          <TabTop.Screen name='LoginScreen' component={LoginScreen} />
          <TabTop.Screen name='RegisterScreen' component={RegisterScreen} />
          <TabTop.Screen
            name='ForgotPasswordScreen'
            component={ForgotPasswordScreen}
          />
        </>
      )}
    </TabTop.Navigator>
  );
};

export default TabProfile;
