// place combine all reducers
import { combineReducers } from "redux";

import productReducer from "./product.reducers";
import authReducer from "./auth.reducers";
import categoriesReducer from "../reducers/categories.reducers";
import supplierReducer from "../reducers/supplier.reducer";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
  categories: categoriesReducer,
  suppliers: supplierReducer,
});

export default rootReducer;
