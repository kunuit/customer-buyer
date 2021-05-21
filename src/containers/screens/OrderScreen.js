import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import { theme } from "../../common/theme";
import Button from "../../components/Button";
import { AddInfoOrder } from "../../components/order.components/AddInfoOrder";
import { DestinationAddress } from "../../components/order.components/DestinationAddress";
import { OrderItem } from "../../components/order.components/OrderItem";
import { PaymentMethod } from "../../components/order.components/PaymentMethod";
import { Policy } from "../../components/order.components/Policy";
import TitleScreen from "../../components/TitleScreen";

export const OrderScreen = ({ navigation, route, ...props }) => {
  const totalPrice = route.params;
  const { listCheckOutId, data } = useSelector((state) => state.carts);
  console.log(`listCheckOutId`, listCheckOutId);
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
          onPress={() => console.log("order")}
          style={{
            backgroundColor: theme.colors.primary,

            width: "90%",

            flex: 1,
            flexDirection: "row",
          }}
        >
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
