import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WarehouseItem from "../../screens/admin.screens/Stock/WarehouseItem";
import { theme } from "../../../common/theme";
import TabStockSlip from "./TabStockSlip";

const TabTop = createMaterialTopTabNavigator();

const TabStock = () => {
  return (
    <TabTop.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        labelStyle: {
          fontSize: 15,
          fontFamily: "gilroy-bold",
          textTransform: "none",
        },
        indicatorStyle: {
          borderColor: theme.colors.primary,
          borderWidth: 1,
          elevation: 0,
        },
      }}>
      <TabTop.Screen name='Warehouse Item' component={WarehouseItem} />
      <TabTop.Screen name='Stock Slip' component={TabStockSlip} />
    </TabTop.Navigator>
  );
};

export default TabStock;
