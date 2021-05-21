import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { theme } from "../../../common/theme";
import InStockSlip from "../../screens/admin.screens/Stock/InStockSlip";
import OutStockSlip from "../../screens/admin.screens/Stock/OutStockSlip";

const TabTop = createMaterialTopTabNavigator();

const TabStockSlip = () => {
  return (
    <TabTop.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.notGray,
        labelStyle: {
          fontSize: 13,
          fontFamily: "gilroy-bold",
          textTransform: "none",
        },
        indicatorStyle: {
          borderColor: theme.colors.notGray,
          borderWidth: 1,
          elevation: 0,
        },
      }}>
      <TabTop.Screen name='In Stock Slip' component={InStockSlip} />
      <TabTop.Screen name='Out Stock Slip' component={OutStockSlip} />
    </TabTop.Navigator>
  );
};

export default TabStockSlip;
