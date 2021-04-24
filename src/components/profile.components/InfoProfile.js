import React from 'react';
import { memo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { Avatar } from 'react-native-paper'

import { theme } from '../../common/theme';
import { color } from 'react-native-reanimated';

const InfoProfile = () => {
  return (
    <View style={styles.root}>
      <Avatar.Image size={75} source={{uri: 'https://i.pinimg.com/736x/76/07/5c/76075c11bfe509ee9a11d9baa991c40d.jpg'}} />
      <View style={styles.info}>
        <View style={styles.nameAndEdit}>
          <Text style={styles.name}>Sexy Cute Girl</Text>
          <Button color={theme.colors.primary} style={styles.buttonEdit} onPress={() => console.log('edit my info')}>

              <Icon
                name='ios-pencil-outline'
                size={20}
                
                color={theme.colors.primary}
              />
          </Button>
        </View>
        <Text style={styles.email}>CuteSayHi@gmail.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomColor: theme.colors.lineBorder,
    borderBottomWidth: 1
  },
  info: {
    marginLeft: 15,
    justifyContent: 'center',
    marginTop: -15
  },
  nameAndEdit: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonEdit: {
    borderRadius: 50,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: 'gilroy-bold',
    color: theme.colors.notBlack
  },
  email: {
    color: theme.colors.notGray,
    marginTop: -5,
    fontFamily: 'gilroy-light',
    fontSize: 15
  }

})

export default memo(InfoProfile);



