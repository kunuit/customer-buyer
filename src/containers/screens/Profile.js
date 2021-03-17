import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { theme } from "../../common/theme";
import InfoCard from "../../components/profile.components/InfoCard";
import InfoProfile from "../../components/profile.components/InfoProfile";

const Profile = () => {
  const arrInfoCard = [
    { nameIcon: "basket-outline", name: "Orders" },
    { nameIcon: "newspaper-outline", name: "My Details" },
    { nameIcon: "ios-location-outline", name: "Delivery Address" },
    { nameIcon: "ios-card-outline", name: "Payment Methods" },
    { nameIcon: "ios-barcode-outline", name: "Promo Card" },
    { nameIcon: "notifications-outline", name: "Notifications" },
    { nameIcon: "ios-help-circle-outline", name: "Help" },
    { nameIcon: "ios-alert-circle-outline", name: "About" },
  ];

  return (
    <View style={styles.root}>
      <InfoProfile />
      {arrInfoCard.map((e, i) => {
        return <InfoCard nameIcon={e.nameIcon} name={e.name} key={i} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.backgrounds.white,
    height: Dimensions.get("window").height,
  },
});

export default Profile;
