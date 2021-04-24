import React, { useEffect, useState } from "react";
import { Animated, StatusBar, StyleSheet } from "react-native";
import { Modal } from "react-native-paper";
import { windowHeight } from "../../common/Dimensions";
import { theme } from "../../common/theme";

export default function PopUp({ children, visible, closedVisible }) {
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalY, setModalY] = useState(new Animated.Value(windowHeight * 0.1));

  useEffect(() => {
    checkVisble();
  }, [visible]);

  const checkVisble = () => {
    if (visible == true) {
      setVisibleModal(true);
      openModal();
    }
    if (visible == false) {
      setTimeout(() => {
        setVisibleModal(false);
      }, 300);
      closeModal();
    }
  };

  const openModal = () => {
    Animated.timing(modalY, {
      duration: 1000,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalY, {
      duration: 1000,
      toValue: windowHeight * 0.1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Modal
      visible={visibleModal}
      onDismiss={() => closedVisible()}
      contentContainerStyle={styles.containerStyle}
    >
      <StatusBar
        backgroundColor={theme.backgrounds.modal}
        barStyle="dark-content"
      />
      <Animated.View
        style={[styles.modal, { transform: [{ translateY: modalY }] }]}
      >
        {children}
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    height: windowHeight * 0.12,
    // width: Dimensions.get("window").width,
    justifyContent: "flex-start",
    backgroundColor: theme.colors.notBlack,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "flex-start",
  },
  containerStyle: {
    marginBottom: -windowHeight * 0.85,
    height: windowHeight * 0.18,
  },
});
