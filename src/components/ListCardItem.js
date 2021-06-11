import React, { useState } from 'react'
import { RefreshControl, Text } from 'react-native'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { multipleRowsFlatListFormat } from '../common/format/FlatListDataFormat'
import CardItem from '../components/CardItem'
import { typeProducts } from '../sagas/product.saga'
import { statusFetch } from '../sagas/utilSagas.saga'
import MainLoading from './Loader/MainLoading'

const ListCardItem = ({ navigation, products, isColumn }) => {
  const { isLoadingFetchAddProduct, productPagination } = useSelector(
    (state) => state.products,
  )

  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false)
  const onRefresh = () => {
    dispatch({
      type: typeProducts.fetchProduct,
      payload: {
        status: statusFetch.load,
      },
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        columnWrapperStyle={{
          flex: 1,
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        numColumns={2}
        ListEmptyComponent={
          <View
            style={{
              flex: 1,
              height: 200,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text>khoong co san pham</Text>
          </View>
        }
        data={
          isColumn && products
            ? multipleRowsFlatListFormat(products, 2)
            : products
        }
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) =>
          item == 'empty' ? (
            <View style={styles.cardItemContainer}></View>
          ) : (
            <View style={styles.cardItemContainer}>
              <CardItem
                item={item}
                navigation={navigation}
                fontSizeTitle={16}
              />
            </View>
          )
        }
        onEndReached={() => {
          //! check error in here
          if (productPagination.totalPage > productPagination.currentPage) {
            dispatch({
              type: typeProducts.fetchProduct,
              payload: {
                status: statusFetch.loadMore,
              },
            })
          }
        }}
        onEndReachedThreshold={0.001}
        ListFooterComponent={
          isLoadingFetchAddProduct && <MainLoading padding={10} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
    width: '100%',
    flex: 1,
    // paddingBottom: Dimensions.get("window").height * 0.09,
  },
  cardItemContainer: {
    margin: 10,
    flex: 1,
  },
})

export default ListCardItem
