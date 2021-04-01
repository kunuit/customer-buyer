import React from "react";
import { Entypo, FontAwesome5, Fontisto, Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { theme } from "../../../common/theme";
import { Dimensions } from "react-native";
import TabProfile from "../TopTab/TabProfile";
import TabProductAdmin from "../TopTab/TabProduct.admin";
import TabSupplier from "../TopTab/TabSupplier";
import TabStock from "../TopTab/TabStock";
import TabCartAdmin from "../TopTab/TabCart.admin";

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
        component={TabProductAdmin}
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
        component={TabSupplier}
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
        component={TabStock}
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
        component={TabCartAdmin}
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
