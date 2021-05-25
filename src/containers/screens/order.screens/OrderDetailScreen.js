import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../common/theme";
import TitleScreen from "../../../components/TitleScreen";
import { typeOrder } from "../../../sagas/order.saga";
import Cancelled from "./Cancelled";
import Delivered from "./Delivered";
import Delivering from "./Delivering";
import PendingGetProduct from "./PendingGetProduct";
import PendingVerify from "./PendingVerify";
import Return from "./Return";

const TabTop = createMaterialTopTabNavigator();

export default function OrderDetailScreen({ navigation }) {
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogin) {
      dispatch({ type: typeOrder.fetchOrder });
    }
  }, [isFocused]);

  return (
    <View style={styles.root}>
      <TitleScreen title="Invoice" isBorder="false" navigation={navigation} />
      <TabTop.Navigator
        tabBarOptions={{
          activeTintColor: theme.colors.primary,
          labelStyle: {
            fontSize: 13,
            fontFamily: "gilroy-bold",
            textTransform: "none",
          },
          tabStyle: { width: 120 },
          indicatorStyle: {
            borderColor: theme.colors.primary,
            borderWidth: 1,
            elevation: 0,
          },
          // scrollEnabled: true,
        }}
      >
        <TabTop.Screen name="Pending Verify" component={PendingVerify} />
        <TabTop.Screen
          name="Pending Get Product"
          component={PendingGetProduct}
        />
        <TabTop.Screen name="Delivering" component={Delivering} />
        <TabTop.Screen name="Delivered" component={Delivered} />
        <TabTop.Screen name="Cancelled" component={Cancelled} />
        <TabTop.Screen name="Return" component={Return} />
      </TabTop.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
