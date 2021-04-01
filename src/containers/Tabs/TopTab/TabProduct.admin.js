import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductDetail from "../../screens/ProductDetail";
import ProductAdmin from "../../screens/admin.screens/Product/Product.admin";
import CreateProduct from "../../screens/admin.screens/Product/CreateProduct";

const TabTop = createStackNavigator();

const TabProductAdmin = () => {
  return (
    <TabTop.Navigator headerMode='none'>
      <TabTop.Screen name='My Products' component={ProductAdmin} />
      <TabTop.Screen name='Product Detail' component={ProductDetail} />
      <TabTop.Screen name='Create Product' component={CreateProduct} />
    </TabTop.Navigator>
  );
};

export default TabProductAdmin;
