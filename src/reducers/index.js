// place combine all reducers
import { combineReducers } from "redux";

import productReducer from "./product.reducers";
import authReducer from "./auth.reducers";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
});

export default rootReducer;
