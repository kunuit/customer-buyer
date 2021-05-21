import React, { memo } from 'react';
import { Dimensions, Image, StyleSheet } from 'react-native';

const Logo = () => (
  <Image source={require('../../assets/images/carrot.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 20,
  },
});

export default memo(Logo);
