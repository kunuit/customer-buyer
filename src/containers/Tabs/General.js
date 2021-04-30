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
import { typeAuths } from "../../sagas/auth.saga";
import { getLocal } from "../../common/storeLocal/Auth.local";
import CartScreen from "../screens/CartScreen";
import { typeFavorites } from "../../sagas/favorite.saga";
import CategoryDetail from "../screens/CategoryDetail";
import MessengerDetail from "../screens/MessengerDetail";
import { statusFetch } from "../../sagas/utilSagas.saga";

const Stack = createStackNavigator();

const General = () => {
  const { isAdminLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // createCategory_FiB_API();
    // dispatch({ type: typeProducts.fetchProductFirebase });
    dispatch({
      type: typeProducts.fetchProduct,
      payload: {
        status: statusFetch.load,
      },
    });
    dispatch({ type: typeCategories.fetchCategory });
    // dispatch({ type: typeProducts.fetchProductByCategory });
    // dispatch({ type: typeFavorites.fetchFavoriteFirebase });
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
    </Stack.Navigator>
  );
};

export default General;
