import React, { useEffect } from 'react'
import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
} from '../screens/auth.screens'
import CartAdminDetail from '../screens/admin.screens/Cart/CartDetail'
import ProductDetail from '../screens/ProductDetail'
import CreateProduct from '../screens/admin.screens/Product/CreateProduct'
import SupplierDetail from '../screens/admin.screens/Supplier/SupplierDetail'
import CreateSupplier from '../screens/admin.screens/Supplier/CreateSupplier'
import MainUX from './BottomTab/mainUX'
import AdminUX from './BottomTab/adminUX'
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'
import { typeProducts } from '../../sagas/product.saga'
import { typeCategories } from '../../sagas/category.saga'
import CategoryDetail from '../screens/CategoryDetail'
import MessengerDetail from '../screens/MessengerDetail'
import { statusFetch } from '../../sagas/utilSagas.saga'
import { typeFavorites } from '../../sagas/favorite.saga'
import { typeCarts } from '../../sagas/cart.saga'
import { OrderScreen } from '../screens/OrderScreen'
import OrderDetailScreen from '../screens/order.screens/OrderDetailScreen'

const Stack = createStackNavigator()

const General = () => {
  const { isAdminLogin } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({
      type: typeProducts.fetchProduct,
      payload: {
        status: statusFetch.load,
      },
    })
    dispatch({ type: typeCategories.fetchCategory })
    // dispatch({ type: typeCarts.fetchCart });
    // dispatch({ type: typeFavorites.fetchFavorite });
  }, [])

  const configTabOther = {
    animation: 'timing',
    config: {
      duration: 400,
    },
  }

  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name="Bottom tab"
        component={isAdminLogin ? AdminUX : MainUX}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />

      <Stack.Screen
        name="Cart admin Detail"
        component={CartAdminDetail}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />

      <Stack.Screen
        name="Product Detail"
        component={ProductDetail}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />
      <Stack.Screen
        name="Create Product"
        component={CreateProduct}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />

      <Stack.Screen
        name="Supplier Detail"
        component={SupplierDetail}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />
      <Stack.Screen
        name="Create Supplier"
        component={CreateSupplier}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />

      <Stack.Screen
        name="Category Detail"
        component={CategoryDetail}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />
      <Stack.Screen
        name="Messenger Detail"
        component={MessengerDetail}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />
      <Stack.Screen
        name="Order Detail"
        component={OrderScreen}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />
      <Stack.Screen
        name="Order Detail By Status"
        component={OrderDetailScreen}
        options={{
          transitionSpec: {
            open: configTabOther,
            close: configTabOther,
          },
        }}
      />
    </Stack.Navigator>
  )
}

export default General
