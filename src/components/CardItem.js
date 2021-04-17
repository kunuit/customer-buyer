import React from "react";
import Colors from "../constants/colors";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import RoundedButton from "../components/RoundedButton";
import { useDispatch, useSelector } from "react-redux";
import { typeCarts } from "../sagas/cart.saga";
import NumberFormat from "react-number-format";
import { theme } from "../common/theme";

const CardItem = ({
  fontSizeTitle,
  heightCard,
  fontSizeDes,
  item,
  numberOfLines = 2,
  navigation,
}) => {
  const { isAdminLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <TouchableHighlight
      underlayColor={theme.backgrounds.white}
      onPress={() => navigation.navigate("Product Detail", item)}
    >
      <View
        style={[
          styles.cardContainer,
          { height: heightCard ? heightCard : 250 },
        ]}
      >
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.cardImage}
            source={{
              uri: item.images
                ? item.images[0]
                : "https://i.pinimg.com/originals/eb/d4/de/ebd4deb64c74e2f1246626d5a290274d.png",
            }}
          />
        </View>
        <View style={styles.cardDetailContainer}>
          <Text
            numberOfLines={numberOfLines}
            style={[
              styles.titleText,
              { fontSize: fontSizeTitle ? fontSizeTitle : 18 },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              styles.descriptionText,
              { fontSize: fontSizeDes ? fontSizeDes : 16 },
            ]}
          >
            7pcs, Price
          </Text>
        </View>
        <View style={styles.addToCartContainer}>
          <NumberFormat
            value={item.price ? Math.round(item.price * 100) / 100 : 0.0}
            displayType={"text"}
            thousandSeparator={true}
            // suffix={" vnd"}
            prefix={"$"}
            renderText={(formattedValue) => (
              <Text
                style={[
                  styles.titleText,
                  { fontSize: fontSizeTitle ? fontSizeTitle : 18 },
                ]}
              >
                {formattedValue}
              </Text>
            )}
          />
          <RoundedButton
            style={{
              backgroundColor: Colors.green,
              borderColor: Colors.grayWhite,
            }}
            onPress={() =>
              dispatch({
                type: typeCarts.addtoCart,
                payload: {
                  data: item,
                  quantity: 1,
                },
              })
            }
          >
            <Entypo
              name={isAdminLogin ? "pencil" : "plus"}
              size={17}
              color="white"
            />
          </RoundedButton>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    width: "100%",
    height: 250,
    borderColor: Colors.gray,
    borderRadius: 20,
    borderWidth: 1,
  },
  cardImageContainer: {
    marginBottom: 20,
    height: "45%",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  cardDetailContainer: {
    flexGrow: 1,
    alignItems: "flex-start",
  },
  titleText: {
    fontFamily: "gilroy-bold",
    fontSize: 18,
    color: "black",
  },
  descriptionText: {
    marginTop: 3,
    fontFamily: "gilroy-light",
    fontSize: 16,
    color: Colors.gray,
  },
  addToCartContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default CardItem;
