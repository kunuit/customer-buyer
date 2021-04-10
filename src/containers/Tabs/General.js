import React, { useEffect } from "react";
import {
  ForgotPasswordScreen,
  HomeScreen,
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

const Stack = createStackNavigator();

const General = () => {
  const { isAdminLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    // createCategory_FiB_API();
    dispatch({ type: typeCategories.fetchCategoryFirebase });
    dispatch({ type: typeProducts.fetchProductFirebase });
  }, []);

  return (
    <Stack.Navigator headerMode='none' initialRouteName='Bottom tab'>
      <Stack.Screen
        name='Bottom tab'
        component={isAdminLogin ? AdminUX : MainUX}
      />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
      <Stack.Screen
        name='ForgotPasswordScreen'
        component={ForgotPasswordScreen}
      />

      <Stack.Screen name='Cart admin Detail' component={CartAdminDetail} />

      <Stack.Screen name='Product Detail' component={ProductDetail} />
      <Stack.Screen name='Create Product' component={CreateProduct} />

      <Stack.Screen name='Supplier Detail' component={SupplierDetail} />
      <Stack.Screen name='Create Supplier' component={CreateSupplier} />
    </Stack.Navigator>
  );
};

export default General;
