import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Dimensions,
} from 'react-native';
import { theme } from '../../common/theme';

// type Props = {
//   children: React.ReactNode;
// };

const Background = ({ children }) => (
  <View
    style={styles.background}>
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      {children}
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.backgrounds.white,
    paddingBottom: Dimensions.get('screen').height * 0.12
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
