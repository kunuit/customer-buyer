import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SupplierDetail from "../../screens/admin.screens/SupplierDetail";
import CreateSupplier from "../../screens/admin.screens/CreateSupplier";
import SupplierAdmin from "../../screens/admin.screens/Supplier.admin";

const TabTop = createStackNavigator();

const TabSupplier = () => {
  return (
    <TabTop.Navigator headerMode='none'>
      <TabTop.Screen name='My Suppliers' component={SupplierAdmin} />
      <TabTop.Screen name='Supplier Detail' component={SupplierDetail} />
      <TabTop.Screen name='Create Supplier' component={CreateSupplier} />
    </TabTop.Navigator>
  );
};

export default TabSupplier;
