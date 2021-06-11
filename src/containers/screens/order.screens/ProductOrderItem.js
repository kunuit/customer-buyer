import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import NumberFormat from 'react-number-format'
import { theme } from '../../../common/theme'

const ProductOrderItem = ({ productOrder }) => {
  const { product, quantity, productId } = productOrder
  return (
    <View style={styles.cartItemContainer}>
      <View style={styles.cartImageContainer}>
        <Image
          style={styles.cartImage}
          resizeMode="center"
          source={{
            uri: product.imageUrls[0],
            // uri: "https://pngimg.com/uploads/pepsi/pepsi_PNG8956.png",
          }}
        />
      </View>
      <View style={styles.cartDetailContainer}>
        <View style={{ marginBottom: 5 }}>
          <Text style={styles.titleText} numberOfLines={2}>
            {product.name}
          </Text>
          <Text style={{ color: theme.colors.notGray }}>1kg, prices</Text>
        </View>
      </View>
      <View style={styles.cartAmount}>
        <NumberFormat
          value={product.price ? Math.round(product.price * 100) / 100 : 0.0}
          displayType={'text'}
          thousandSeparator={true}
          // suffix={" vnd"}
          prefix={'$'}
          renderText={(formattedValue) => (
            <Text style={styles.titleText}>{formattedValue}</Text>
          )}
        />
        <Text>x{quantity}</Text>
      </View>
    </View>
  )
}

export default ProductOrderItem

const styles = StyleSheet.create({
  cartItemContainer: {
    paddingHorizontal: 15,
    width: '100%',
    flexDirection: 'row',
  },
  cartImageContainer: {
    padding: 5,
    width: '25%',
  },
  cartImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  cartDetailContainer: {
    padding: 6,
    justifyContent: 'center',
    width: '50%',
    height: 100,
  },
  cartAmount: {
    // flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '25%',
    height: 100,
  },
  titleText: {
    fontFamily: 'gilroy-bold',
    fontSize: 16,
    color: theme.colors.notBlack,
    paddingRight: 5,
  },
  quantityAjustContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
})
