import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const images = [
  "https://image.freepik.com/free-vector/brunch-banner-template-with-discount_23-2148815199.jpg",
  "https://image.freepik.com/free-vector/bread-banner-template-with-photo_23-2148923553.jpg",
  "https://image.freepik.com/free-vector/bio-healthy-food-banner_23-2148852378.jpg",
];
const HomeBanner = () => {
  return (
    <View style={styles.bannerImageContainer}>
      <Swiper
        // style={styles.wrapper}
        // dotStyle={{ bottom: "5%" }}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={4}
        activeDot={<View style={styles.activeDot} />}
      >
        {images.map((item, index) => (
          <Image
            key={index}
            style={styles.bannerImage}
            source={{ uri: item }}
          />
        ))}
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  bannerImageContainer: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
    width: "100%",
    height: Dimensions.get("screen").height * 0.25,
    resizeMode: "contain",
  },
  activeDot: {
    backgroundColor: "#53B175",
    width: 25,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
});
export default HomeBanner;
