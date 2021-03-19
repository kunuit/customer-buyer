// place combine all reducers
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import productReducer from "./product.reducers";
import authReducer from "./auth.reducers";

const rootReducer = combineReducers({
  products: productReducer,
  auth: authReducer,
});

export default rootReducer;
