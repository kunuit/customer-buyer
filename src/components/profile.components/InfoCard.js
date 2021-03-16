import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { theme } from '../../common/theme';

const InfoCard = () => {
  return (
    <Card style={{elevation: 0}} onPress={() => console.log('to item')}>
      <View  style={styles.root}>

        <Icon
          name='ios-basket-outline'
          size={30}
          
          color={theme.colors.primary}
        />
        <Text style={styles.nameItem}>Giỏ Hàng</Text>
        <Icon
          name='chevron-forward'
          size={20}
          
          color={theme.colors.primary}
          />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: theme.colors.lineBorder,
    borderBottomWidth: 1
  },
  nameItem: {
    flex: 1,
    marginLeft: 20
  }
})

export default InfoCard;
