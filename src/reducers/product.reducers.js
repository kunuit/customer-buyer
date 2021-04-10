import { typeProducts } from "../sagas/product.saga";

const initialState = {
  data: [],
  isLoading: false,
  isCreatedProduct: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typeProducts.showLoadingProduct:
      return {
        ...state,
        isLoading: true,
      };
    case typeProducts.fetchProductFirebaseSuccess:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
      };
    case typeProducts.createProductFirebaseSuccess:
      return {
        ...state,
        isCreatedProduct: true,
      };
    case typeProducts.resetCreateProduct:
      return {
        ...state,
        isCreatedProduct: false,
      };

    default:
      return state;
  }
};

export default reducer;
