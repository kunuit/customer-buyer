import React, { useState } from "react";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { orderStatus, typeOrder } from "../../../sagas/order.saga";
import OrderItem from "./OrderItem";
import { theme } from "../../../common/theme";

const Return = () => {
  const { isLoadingOrder, orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    dispatch({ type: typeOrder.fetchOrder });
  };

  return (
    <View style={styles.root}>
      {isLoadingOrder && (
        <LottieView
          source={require("../../../../assets/stayHome.json")}
          autoPlay
          loop
          style={{ height: 150 }}
        />
      )}
      {!isLoadingOrder && (
        <FlatList
          style={styles.productOrders}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={orders.filter((order) => {
            if (order.status === orderStatus.return) return order;
          })}
          ListEmptyComponent={
            <View
              style={{
                height: 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>chưa có đơn hàng</Text>
            </View>
          }
          // ItemSeparatorComponent={Line}
          renderItem={({ item }) => {
            console.log(`item pending`, item);
            // console.log(`data[indexCheckout]`, data[indexCheckout]);
            // return <OrderItem item={data[indexCheckout]} />;
            return <OrderItem order={item} status={item.status} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Return;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
});
