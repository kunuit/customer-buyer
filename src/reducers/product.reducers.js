import { typeProducts } from "../sagas/product.saga";

const initialState = {
  data: [],
  productByCategory: [],
  queryProduct: [],
  isLoading: false,
  isLoadingSearchProduct: false,
  isLoadingFilterByCategory: false,
  isCreatedOrUpdatedOrDeletedProduct: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeProducts.showLoadingProduct:
      return {
        ...state,
        isLoading: true,
      };
    case typeProducts.showLoadingFilterByCategory:
      return {
        ...state,
        isLoadingFilterByCategory: true,
      };
    case typeProducts.showLoadingSearchProduct:
      return {
        ...state,
        isLoadingSearchProduct: true,
      };
    case typeProducts.fetchProductSuccess:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    case typeProducts.createProductSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedProduct: true,
        data: [...state.data, payload.data],
      };
    case typeProducts.removeProductSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedProduct: true,
        data: payload.data,
      };
    case typeProducts.updateProductSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedProduct: true,
        data: payload.data,
      };
    case typeProducts.resetCreateProduct:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedProduct: false,
      };
    case typeProducts.queryProductSuccess:
      return {
        ...state,
        queryProduct: payload.queryProduct,
        isLoadingSearchProduct: false,
      };
    case typeProducts.filterProductByCategorySuccess:
      return {
        ...state,
        productByCategory: payload.productByCategory,
        isLoadingFilterByCategory: false,
      };
    default:
      return state;
  }
};

export default reducer;
