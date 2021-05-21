import React from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import Button from "../Button";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { theme } from "../../common/theme";
import { Text } from "react-native";

const ImagePickerComponent = ({ onImage }) => {
  const pickFromGallery = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (granted) {
      const data = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        espect: [1, 1],
        quality: 0.5,
      });
      console.log(data, "data gallery");
      if (data.uri) onImage(data.uri);
    } else {
      Alert.alert("you need to give up permission");
    }
  };

  const pickFromCamera = async () => {
    const { granted } = await Permissions.askAsync(Permissions.CAMERA);
    if (granted) {
      const data = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        espect: [1, 1],
        quality: 0.5,
      });
      console.log(data, "data image");
      if (data.uri) onImage(data.uri);
    } else {
      Alert.alert("you need to give up permission");
    }
  };
  return (
    <View style={styles.root}>
      <View>
        <Button
          mode='contained'
          style={styles.button}
          onPress={() => pickFromCamera()}>
          <Text>Camera</Text>
        </Button>
      </View>
      <View>
        <Button
          mode='contained'
          style={styles.button}
          onPress={() => pickFromGallery()}>
          <Text>Gallery</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  button: {
    backgroundColor: theme.colors.primary,
  },
});

export default ImagePickerComponent;
