import { typeProducts } from "../sagas/product.saga";

const initialState = {
  data: [],
  currentProduct: [],
  productByCategory: [],
  queryProduct: [],
  currentPage: 1,
  isLoading: false,
  isLoadingProductDetail: false,
  isLoadingFetchAddProduct: false,
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
    case typeProducts.showLoadingFetchAddProduct:
      return {
        ...state,
        isLoadingFetchAddProduct: true,
      };
    case typeProducts.showLoadingProductDetail:
      return {
        ...state,
        isLoadingProductDetail: true,
      };
    case typeProducts.hiddenLoadingFetchAddProduct:
      return {
        ...state,
        isLoadingFetchAddProduct: false,
      };
    case typeProducts.fetchProductSuccess:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
        currentPage: 1,
      };
    case typeProducts.fetchAddProductSuccess:
      return {
        ...state,
        data: [...state.data, ...payload.newData],
        currentPage: state.currentPage + 1,
        isLoadingFetchAddProduct: false,
      };
    case typeProducts.fetchOneProductSuccess:
      return {
        ...state,
        currentProduct: payload.currentProduct,
        isLoadingProductDetail: false,
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
    case typeProducts.fetchProductByCategorySuccess:
      return {
        ...state,
        productByCategory: payload.productByCategory,
      };
    default:
      return state;
  }
};

export default reducer;
