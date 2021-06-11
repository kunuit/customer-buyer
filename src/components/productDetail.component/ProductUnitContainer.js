import React from 'react'
import { Entypo, AntDesign, FontAwesome } from '@expo/vector-icons'
import RoundedButton from '../RoundedButton'
import { View, StyleSheet, Text } from 'react-native'
import { theme } from '../../common/theme'

const ProductUnitContainer = ({
  title,
  unitText,
  isEdit,
  upDateProduct,
  heart,
  onSetFavorite,
}) => {
  return (
    <View style={styles.productUnitContainer}>
      <View style={{ flex: 0.9 }}>
        <Text style={styles.titleText} numberOfLines={2}>
          {title ? title : 'Naturel Red Apple'}
        </Text>
        <Text style={styles.unitText}>
          {unitText ? unitText : '1kg, Price'}
        </Text>
      </View>
      <View>
        {isEdit ? (
          <RoundedButton
            mode="contained"
            onPress={() => upDateProduct()}
            style={styles.buttonItem}
          >
            <FontAwesome name="edit" size={24} color="black" />
          </RoundedButton>
        ) : (
          <RoundedButton
            mode="contained"
            onPress={() => {
              onSetFavorite()
            }}
            style={styles.buttonItem}
          >
            {heart ? (
              <AntDesign name="heart" size={24} color="pink" />
            ) : (
              <AntDesign name="hearto" size={24} color="black" />
            )}
          </RoundedButton>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  productUnitContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  titleText: {
    fontFamily: 'gilroy-bold',
    fontSize: 24,
    color: '#181725',
  },
  unitText: {
    fontFamily: 'gilroy-light',
    fontSize: 14,
    color: '#7C7C7C',
  },
  buttonItem: {
    borderWidth: 0,
    backgroundColor: theme.backgrounds.white,
  },
})

export default ProductUnitContainer
