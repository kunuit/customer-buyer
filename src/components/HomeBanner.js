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
<<<<<<< HEAD
        // dotStyle={{ bottom: "5%" }}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={4}
=======
        dotStyle={{ bottom: "-6%" }}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={3000}
>>>>>>> react-native-cli
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
<<<<<<< HEAD
    width: "100%",
    height: Dimensions.get("screen").height * 0.25,
=======
    flex: 1,
    marginVertical: 5,
    height: 150,
>>>>>>> react-native-cli
    justifyContent: "center",
    alignItems: "center",
  },
  bannerImage: {
<<<<<<< HEAD
    width: "100%",
    height: Dimensions.get("screen").height * 0.25,
=======
    flex: 1,
    height: 150,
>>>>>>> react-native-cli
    resizeMode: "contain",
  },
  activeDot: {
    backgroundColor: "#53B175",
    width: 25,
<<<<<<< HEAD
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
=======
    height: 6,
    borderRadius: 4,
    marginHorizontal: 3,
    bottom: "-6%",
>>>>>>> react-native-cli
  },
});
export default HomeBanner;
