import React, { useEffect } from "react";
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
import { HomeScreen } from "../../screens/auth.screens";
import ProductAdmin from "../../screens/admin.screens/Product/Product.admin";
import SupplierAdmin from "../../screens/admin.screens/Supplier/Supplier.admin";
import CartAdmin from "../../screens/admin.screens/Cart/Cart.admin";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../screens/Profile";
import { typeSuppliers } from "../../../sagas/supplier.saga";

const Tab = createBottomTabNavigator();

const AdminUX = () => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // createCategory_FiB_API();
    dispatch({ type: typeSuppliers.fetchSupplierFirebase });
  }, []);
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
        name="Product"
        component={ProductAdmin}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Entypo
              name="layers"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Supplier"
        component={SupplierAdmin}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <FontAwesome5
              name="building"
              size={24}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stock"
        component={TabStock}
        showIcon={true}
        options={{
          tabBarIcon: ({ focused, tintColor }) => (
            <Ionicons
              name="md-library-outline"
              size={25}
              color={focused ? theme.colors.primary : theme.colors.notBlack}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartAdmin}
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

export default AdminUX;
