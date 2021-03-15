import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { theme } from '../../common/theme';
import InfoCard from '../../components/profile.components/InfoCard';
import InfoProfile from '../../components/profile.components/InfoProfile';

const Profile = () => {
  return (
    <View style={styles.root}>
      <InfoProfile/>
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
      <InfoCard />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: theme.backgrounds.white,
    height:  Dimensions.get('window').height
  }
})

export default Profile;
