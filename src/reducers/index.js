// place combine all reducers
import { combineReducers } from "redux";

import productReducer from "./product.reducers";
import authReducer from "./auth.reducers";
import categoriesReducer from "../reducers/categories.reducers";
import supplierReducer from "../reducers/supplier.reducer";
import cartReducer from "../reducers/cart.reducer";
import favoriteReducer from "../reducers/favorite.reducers";
import uploadReducer from "../reducers/upload.reducer";
import measureReducer from "../reducers/measure.reducer";
import orderReducer from "../reducers/order.reducers";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
  categories: categoriesReducer,
  suppliers: supplierReducer,
  carts: cartReducer,
  favorites: favoriteReducer,
  uploads: uploadReducer,
  measures: measureReducer,
  orders: orderReducer,
});

export default rootReducer;
