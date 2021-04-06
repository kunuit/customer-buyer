import React from "react";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { View, StyleSheet, Text } from "react-native";
import RoundedButton from "../RoundedButton";
import { Rating } from "react-native-ratings";
class ReviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "right",
      productReview: "",
      isExtend: false,
    };
  }
  extend = () => {
    const productReview = "Love you guys kong and kun";
    if (!this.state.isExtend) {
      this.setState({
        name: "down",
        productReview: productReview,
        isExtend: true,
      });
    } else {
      this.setState({
        name: "right",
        productReview: "",
        isExtend: false,
      });
    }
  };
  render() {
    return (
      <View style={styles.reviewContainer}>
        <View style={styles.reviewTittleContainer}>
          <Text style={styles.reviewTittle}>Review</Text>
          <View style={styles.ratingContainer}>
            <View style={styles.star}>
              <Rating
                type="custom"
                imageSize={18}
                startingValue={3}
                jumpValue={1}
                ratingColor="#F3603F"
                onFinishRating={this.ratingCompleted}
              />
            </View>
            <RoundedButton style={styles.buttonExtend} onPress={this.extend}>
              <AntDesign name={this.state.name} size={24} color="black" />
            </RoundedButton>
          </View>
        </View>
        <Text numberOfLines={3} style={styles.reviewText}>
          {this.state.productReview}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  reviewContainer: {
    marginHorizontal: "5%",
    borderTopWidth: 1,
    borderTopColor: "rgba(226, 226, 226, 0.7)",
  },
  reviewTittleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "5%",
  },
  reviewTittle: {
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "#181725",
  },
  ratingContainer: {
    height: "100%",
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginRight: "15%",
    paddingVertical: "5%",
  },
  buttonExtend: {
    borderWidth: 0,
  },
  reviewText: {
    fontFamily: "gilroy-light",
    fontSize: 14,
    color: "#7C7C7C",
    paddingBottom: "5%",
  },
});

export default ReviewContainer;
