import React from "react";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cart from "../../screens/CartScreen";
import Favorite from "../../screens/FavouriteScreen";
import Profile from "../../screens/Profile";
import { theme } from "../../../common/theme";
import { Dimensions } from "react-native";
import Explore from "../../screens/Explore";
import Home from "../../screens/Home";
import { HomeScreen } from "../../screens/auth.screens";
import { useSelector } from "react-redux";
import ProductDetail from "../../screens/ProductDetail";

const Tab = createBottomTabNavigator();

const MainUX = () => {
  const { isLogin } = useSelector((state) => state.auth);
  return (
    <Tab.Navigator
      tabBarOptions={{
        // keyboardHidesTabBar: true,
        activeTintColor: theme.colors.primary,
        inactiveTintColor: theme.colors.notBlack,
        labelStyle: { fontSize: 12, fontFamily: "gilroy-bold" },
        style: {
          backgroundColor: theme.backgrounds.white,
          paddingBottom: 15,
          paddingVertical: 10,
          height: Dimensions.get("window").height * 0.09,
          borderTopEndRadius: 25,
          borderTopStartRadius: 25,
          position: "absolute",
        },
        showIcon: true,
        showLabel: true,
      }}
    >
      <Tab.Screen
        name="Shop"
        component={Home}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Fontisto
              name="shopping-store"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ProductDetail}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <MaterialCommunityIcons
              name="briefcase-search-outline"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Zocial
              name="cart"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <MaterialIcons
              name="favorite-outline"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={isLogin ? Profile : HomeScreen}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <MaterialCommunityIcons
              name="face-profile"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainUX;
