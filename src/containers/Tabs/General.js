import React, { useEffect } from "react";
import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
} from "../screens/auth.screens";
import CartAdminDetail from "../screens/admin.screens/Cart/CartDetail";
import ProductDetail from "../screens/ProductDetail";
import CreateProduct from "../screens/admin.screens/Product/CreateProduct";
import SupplierDetail from "../screens/admin.screens/Supplier/SupplierDetail";
import CreateSupplier from "../screens/admin.screens/Supplier/CreateSupplier";
import MainUX from "./BottomTab/mainUX";
import AdminUX from "./BottomTab/adminUX";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { typeProducts } from "../../sagas/product.saga";
import { typeCategories } from "../../sagas/category.saga";
import CategoryDetail from "../screens/CategoryDetail";
import MessengerDetail from "../screens/MessengerDetail";
import { statusFetch } from "../../sagas/utilSagas.saga";
import { typeFavorites } from "../../sagas/favorite.saga";
import { typeCarts } from "../../sagas/cart.saga";
import { OrderScreen } from "../screens/OrderScreen";
import OrderDetailScreen from "../screens/order.screens/OrderDetailScreen";

const Stack = createStackNavigator();

const General = () => {
  const { isAdminLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: typeProducts.fetchProduct,
      payload: {
        status: statusFetch.load,
      },
    });
    dispatch({ type: typeCategories.fetchCategory });
    // dispatch({ type: typeCarts.fetchCart });
    // dispatch({ type: typeFavorites.fetchFavorite });
  }, []);

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="Bottom tab"
        component={isAdminLogin ? AdminUX : MainUX}
      />

      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />

      <Stack.Screen name="Cart admin Detail" component={CartAdminDetail} />

      <Stack.Screen name="Product Detail" component={ProductDetail} />
      <Stack.Screen name="Create Product" component={CreateProduct} />

      <Stack.Screen name="Supplier Detail" component={SupplierDetail} />
      <Stack.Screen name="Create Supplier" component={CreateSupplier} />

      <Stack.Screen name="Category Detail" component={CategoryDetail} />
      <Stack.Screen name="Messenger Detail" component={MessengerDetail} />
      <Stack.Screen name="Order Detail" component={OrderScreen} />
      <Stack.Screen
        name="Order Detail By Status"
        component={OrderDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default General;
