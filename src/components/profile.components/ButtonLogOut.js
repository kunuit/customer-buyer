import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { theme } from '../../common/theme';
import Button from '../Button';

const ButtonLogOut = () => {
  return (
    <View style={styles.buttonLogOutContainer}>
          <Button 
            // mode='contained' 
            style={{ backgroundColor: theme.backgrounds.paper, }}
            onPress={() => console.log('log out')}
            >
              
              <View style={styles.buttonLogOut}>
                <Icon
                  name='md-log-out-outline'
                  size={25}
                  color={theme.colors.primary}
                  />
                <Text style={styles.text}>Log Out</Text>
                <Icon
                  name='md-log-out-outline'
                  size={25}
                  color={theme.backgrounds.paper}
                  />
              </View>
            
          </Button>

        </View>
  );
}

const styles = StyleSheet.create({
  buttonLogOutContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  buttonLogOut: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'gilroy-bold',
    fontSize: 15,
    color: theme.colors.primary,
  }
})

export default ButtonLogOut;
