import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { windowWidth } from "../../../common/Dimensions";
import { theme } from "../../../common/theme";
import Button from "../../../components/Button";
import ProductOrderItem from "./ProductOrderItem";
import { FontAwesome5 } from "@expo/vector-icons";

const OrderItem = ({ order, status, ...props }) => {
  console.log(`status`, status);
  const { totalPrice, products, date } = order;
  const d = new Date(date);
  return (
    <View style={styles.root}>
      <View style={styles.status}>
        <Text style={{ color: "white", fontFamily: "gilroy-bold" }}>
          {status}
        </Text>
      </View>
      <View style={styles.productOrders}>
        <FlatList
          showsVerticalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          // }
          data={products}
          ListEmptyComponent={
            <View
              style={{
                height: 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>khoong co san pham</Text>
            </View>
          }
          ItemSeparatorComponent={Line}
          renderItem={({ item }) => {
            return <ProductOrderItem productOrder={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.totalPrice}>
        <Text style={{ fontFamily: "gilroy-bold" }}>
          {products.length} product{products.length === 1 ? "" : "s"}
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="bitcoin"
            size={24}
            color={theme.colors.primary}
            style={{ marginRight: 8 }}
          />
          <Text style={{ fontFamily: "gilroy-bold" }}>
            Thành tiền: ${totalPrice}
          </Text>
        </View>
      </View>
      <View style={styles.contract}>
        <Text style={{ flex: 0.5, fontFamily: "gilroy-light" }}>
          Created order date{" "}
          {d.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Text>
        <Button
          style={{
            backgroundColor: theme.colors.primary,
            flex: 0.4,

            // width: "90%",
          }}
        >
          <Text style={{ color: "white", fontFamily: "gilroy-bold" }}>
            Contract Shop
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({
  root: {
    width: windowWidth,
    marginTop: 16,
    padding: 4,
    backgroundColor: theme.backgrounds.white,
  },
  status: {
    width: "30%",
    padding: 4,

    backgroundColor: theme.colors.primary,
    borderTopLeftRadius: 15,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -10,
    left: 10,
  },
  totalPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.primary,
  },
  contract: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
});

const Line = () => {
  return (
    <View
      style={{
        marginHorizontal: 10,
        borderBottomColor: theme.colors.lineBorder,
        borderBottomWidth: 1,
      }}
    />
  );
};
