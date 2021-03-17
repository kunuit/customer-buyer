import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { theme } from "../../common/theme";
import InfoCard from "../../components/profile.components/InfoCard";
import InfoProfile from "../../components/profile.components/InfoProfile";
import { FlatList } from "react-native-gesture-handler";
import ButtonLogOut from "../../components/profile.components/ButtonLogOut";

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
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.root}>
        {/* <InfoProfile/> */}
        <FlatList
          data={arrInfoCard}
          renderItem={({ item }) => {
            return <InfoCard nameIcon={item.nameIcon} name={item.name} />;
          }}
          keyExtractor={(item) => item.name}
          ListHeaderComponent={InfoProfile}
          ListFooterComponent={ButtonLogOut}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.backgrounds.white,
    height: "100%",
    paddingBottom: "15%",
  },
});

export default Profile;
