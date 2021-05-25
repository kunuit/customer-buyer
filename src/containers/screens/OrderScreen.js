import { AntDesign, Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import NumberFormat from "react-number-format";
import { showBottomAlert } from "react-native-modal-bottom-alert";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../common/theme";
import Button from "../../components/Button";
import { AddInfoOrder } from "../../components/order.components/AddInfoOrder";
import { DestinationAddress } from "../../components/order.components/DestinationAddress";
import { OrderItem } from "../../components/order.components/OrderItem";
import { PaymentMethod } from "../../components/order.components/PaymentMethod";
import { Policy } from "../../components/order.components/Policy";
import TitleScreen from "../../components/TitleScreen";
import { typeOrder } from "../../sagas/order.saga";
import { useNavigation } from "@react-navigation/native";

export const OrderScreen = ({ navigation, route, ...props }) => {
  const totalPrice = route.params;
  const dispatch = useDispatch();
  const { listCheckOutId, data } = useSelector((state) => state.carts);
  const { ordered, isLoadingCrudOrder } = useSelector((state) => state.orders);
  console.log(`listCheckOutId`, listCheckOutId);

  const purchase = () => {
    const arrProductOrder = data.reduce((pre, cur) => {
      console.log(`pre, cur`, pre, cur);
      if (listCheckOutId.some((id) => id == cur._id)) {
        return [...pre, { id: cur.product._id, quantity: cur.quantity }];
      }
      return pre;
    }, []);

    console.log(`arrProductOrder`, arrProductOrder);
    if (arrProductOrder) {
      dispatch({
        type: typeOrder.createOrder,
        payload: {
          productIds: arrProductOrder,
        },
      });
    }
  };

  useEffect(() => {
    if (ordered) {
      showBottomAlert(
        "success",
        "Your Order has been accepted",
        "Let's check it",
        () => {
          navigation.goBack();
          navigation.navigate("Order Detail By Status");
        }
      );
      dispatch({ type: typeOrder.resetOrder });
    }
  }, [ordered]);

  return (
    <View style={styles.root}>
      <TitleScreen isBorder={true} title="Order" navigation={navigation} />
      {/* <DestinationAddress /> */}

      <FlatList
        style={styles.productOrders}
        showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        data={listCheckOutId}
        ItemSeparatorComponent={Line}
        renderItem={({ item }) => {
          const indexCheckout = data.findIndex(
            (product) => product._id == item
          );
          console.log(`data[indexCheckout]`, data[indexCheckout]);
          return <OrderItem item={data[indexCheckout]} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={DestinationAddress}
        ListFooterComponent={
          <>
            <AddInfoOrder />
            <PaymentMethod totalPrice={totalPrice} />
            <Policy />
          </>
        }
      />
      <View style={styles.buttonBottom}>
        <Button
          disabled={isLoadingCrudOrder}
          onPress={() => purchase()}
          style={{
            backgroundColor: theme.colors.primary,

            width: "90%",

            flex: 1,
            flexDirection: "row",
          }}
        >
          {isLoadingCrudOrder ? (
            <ActivityIndicator
              animating={true}
              color={theme.backgrounds.white}
              size={21}
              style={{ height: 25, flex: 1, textAlign: "center" }}
            />
          ) : (
            <Text
              style={{
                color: "white",
                fontFamily: "gilroy-bold",
                flex: 1,
                textAlign: "center",
              }}
            >
              Purchase
            </Text>
          )}
          {false ? (
            <ActivityIndicator
              animating={true}
              color={theme.backgrounds.white}
              size={21}
              style={{ height: 25 }}
            />
          ) : (
            <NumberFormat
              value={totalPrice + 5}
              displayType={"text"}
              thousandSeparator={true}
              // suffix={" vnd"}
              prefix={"$"}
              renderText={(formattedValue) => (
                <Text style={styles.numberText} numberOfLines={1}>
                  {formattedValue}
                </Text>
              )}
            />
          )}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: theme.backgrounds.white,
  },
  numberText: {
    fontFamily: "gilroy-bold",
    fontSize: 15,
  },
  buttonBottom: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
  },
  productOrders: {
    flex: 1,
    paddingBottom: 37,
  },
});

const Line = () => {
  return (
    <View
      style={{
        borderBottomColor: theme.colors.lineBorder,
        borderBottomWidth: 1,
      }}
    />
  );
};
