import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Dimensions } from "react-native";
import Swiper from "react-native-swiper";
const images = [
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/25d45014-8cc3-4c98-b02c-5a0cf3a55ddd/dcrjbvx-b5078bbf-03ff-4625-b214-35c3f9fefc4c.png/v1/fill/w_900,h_900,strp/red_apple_on_a_transparent_background__by_prussiaart_dcrjbvx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD05MDAiLCJwYXRoIjoiXC9mXC8yNWQ0NTAxNC04Y2MzLTRjOTgtYjAyYy01YTBjZjNhNTVkZGRcL2RjcmpidngtYjUwNzhiYmYtMDNmZi00NjI1LWIyMTQtMzVjM2Y5ZmVmYzRjLnBuZyIsIndpZHRoIjoiPD05MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Y_44ca-E9CLNYzmz--rWpfNPHEmx54gRKEpajL2atPA",
  "http://iconbug.com/download/size/512/icon/2240/juicy-red-apple/",
  "https://pngimg.com/uploads/apple/apple_PNG12489.png",
];
const ProductDetailImageContainer = () => {
  return (
    <View style={styles.productDetailImageContainer}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={true}
        autoplayTimeout={4}
        activeDot={<View style={styles.activeDot} />}
      >
        {images.map((item, index) => (
          <Image
            key={index}
            style={styles.productDetailImage}
            source={{ uri: item }}
          />
        ))}
      </Swiper>
    </View>
  );
};
const styles = StyleSheet.create({
  productDetailImageContainer: {
    backgroundColor: "rgb(242, 243, 242)",
    width: "100%",
    height: Dimensions.get("screen").height * 0.4,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  productDetailImage: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height * 0.3,
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
export default ProductDetailImageContainer;
