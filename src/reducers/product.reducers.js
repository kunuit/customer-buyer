import { isLoaded } from "expo-font";
import * as productTask from "../constants/product.constants";
// import { toastError, toastSuccess } from '../helpers/toast.Helper';

const initialState = {
  data: [],
  isLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
