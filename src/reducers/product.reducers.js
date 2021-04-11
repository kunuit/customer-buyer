import { typeProducts } from "../sagas/product.saga";

const initialState = {
  data: [],
  isLoading: false,
  isCreatedOrUpdatedOrDeletedProduct: false,
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
        isCreatedOrUpdatedOrDeletedProduct: true,
        isLoading: false,
      };
    case typeProducts.resetCreateProduct:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedProduct: false,
      };

    default:
      return state;
  }
};

export default reducer;
