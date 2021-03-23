// place combine all reducers
import { combineReducers } from "redux";

import productReducer from "./product.reducers";
import authReducer from "./auth.reducers";
import categoriesReducer from "../reducers/categories.reducers";
const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
  categories: categoriesReducer,
});

export default rootReducer;
