import * as productTask from "../constants/product.constants";
// import { toastError, toastSuccess } from '../helpers/toast.Helper';

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
