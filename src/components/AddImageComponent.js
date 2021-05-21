import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { theme } from "../common/theme";
import Button from "./Button";

const AddImageComponent = ({ images, onAddImage }) => {
  const renderImageView = () => {
    if (!images || images.length == 0) {
      return (
        <Image
          style={{
            height: 60,
            width: 60,
            borderRadius: 5,
            resizeMode: "contain",
          }}
          source={{
            uri:
              "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg",
          }}
        />
      );
    } else if (images.length > 3) {
      return (
        <View style={styles.imageView}>
          {renderImage(images.slice(0, 3))}
          <Feather
            name='more-horizontal'
            size={24}
            color={theme.colors.notGray}
          />
        </View>
      );
    } else {
      return renderImage(images);
    }
  };

  const renderImage = (InputImages) => {
    return InputImages.map((uri, index) => {
      return (
        <Image
          key={index}
          style={{
            height: 60,
            width: 60,
            borderRadius: 5,
            resizeMode: "contain",
          }}
          source={{
            uri: uri,
          }}
        />
      );
    });
  };

  return (
    <View style={styles.root}>
      <View style={styles.imageView}>{renderImageView()}</View>

      <Button
        mode='contained'
        style={styles.button}
        onPress={() => {
          onAddImage();
        }}>
        <MaterialCommunityIcons
          name='image-plus'
          size={24}
          color={theme.colors.primary}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "3%",
  },
  button: {
    width: "20%",
  },
  imageView: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  threeImageView: {
    flexDirection: "row",
  },
});

export default AddImageComponent;
