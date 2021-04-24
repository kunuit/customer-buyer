import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CartAdmin from "../../screens/admin.screens/Cart/Cart.admin";
import CartDetail from "../../screens/admin.screens/Cart/CartDetail";

const TabTop = createStackNavigator();

const TabCartAdmin = () => {
  return (
    <TabTop.Navigator headerMode='none'>
      <TabTop.Screen name='Cart' component={CartAdmin} />
      <TabTop.Screen name='Cart Detail' component={CartDetail} />
    </TabTop.Navigator>
  );
};

export default TabCartAdmin;
