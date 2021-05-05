import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { theme } from "../../common/theme";

export const DestinationAddress = () => {
  const { dataCustomer } = useSelector((state) => state.auth);
  const { fullName } = dataCustomer;
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <View style={styles.destination}>
          <Ionicons
            name="location-outline"
            size={24}
            color={theme.colors.primary}
          />
          <View style={styles.destinationMain}>
            <Text style={[styles.text]}>Destination Address</Text>
            <Text>
              {fullName} | 0961010875 {"\n"}Ktx Khu B
            </Text>
          </View>
          <View style={styles.destinationRight}>
            <AntDesign name="right" size={20} color="black" />
          </View>
        </View>
      </TouchableOpacity>
      <Line />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    borderBottomColor: theme.backgrounds.paper,
    borderBottomWidth: 10,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  destination: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: theme.backgrounds.paper,
  },
  destinationMain: {
    flex: 1,
  },
  destinationRight: {
    flex: 0.1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "gilroy-bold",
    padding: 3,
  },
});

const Line = () => {
  return (
    <View
      style={{
        borderColor: theme.colors.primary,
        borderStyle: "dashed",
        borderWidth: 2,
        borderRadius: 1,
      }}
    />
  );
};
