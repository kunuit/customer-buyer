import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { Entypo, FontAwesome5, Fontisto, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cart from "../../screens/CartScreen";
import Favorite from "../../screens/FavouriteScreen";
import Profile from "../../screens/Profile";
import { theme } from "../../../common/theme";
import { Dimensions } from "react-native";
import TabProfile from "../TopTab/TabProfile";
import ProductDetail from "../../screens/ProductDetail";
import Explore from "../../screens/Explore";
import CartScreen from "../../screens/CartScreen";
import CardItem from "../../../components/CardItem";
import ListCardItem from "../../../components/ListCardItem";
import ProductAdmin from "../../screens/admin.screens/Product.admin";
import SupplierAdmin from "../../screens/admin.screens/Supplier.admin";
import CartAdmin from "../../screens/admin.screens/Cart.admin";
import StockAdmin from "../../screens/admin.screens/Stock.admin";

const Tab = createBottomTabNavigator();

const AdminUX = () => {
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
      }}>
      <Tab.Screen
        name='Product'
        component={ProductAdmin}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Entypo
              name='layers'
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Supplier'
        component={SupplierAdmin}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <FontAwesome5
              name='building'
              size={24}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Stock'
        component={StockAdmin}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Ionicons
              name='md-library-outline'
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={CartAdmin}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Zocial
              name='cart'
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={TabProfile}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <MaterialCommunityIcons
              name='face-profile'
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AdminUX;
