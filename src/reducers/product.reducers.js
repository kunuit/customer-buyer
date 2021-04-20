import { typeProducts } from "../sagas/product.saga";

const initialState = {
  data: [],
  isLoading: false,
  isCreatedOrUpdatedOrDeletedProduct: false,
};

const reducer = (state = initialState, { type, payload }) => {
  console.log(`action`, { type });
  switch (type) {
    case typeProducts.showLoadingProduct:
      return {
        ...state,
        isLoading: true,
      };
    case typeProducts.fetchProductFirebaseSuccess:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    case typeProducts.fetchProductSuccess:
      return {
        ...state,
        data: payload.data,
        isLoading: false,
      };
    case typeProducts.createProductFirebaseSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedProduct: true,
        isLoading: false,
        data: [...state.data, payload.data],
      };
    case typeProducts.createProductSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedProduct: true,
        data: [...state.data, payload.data],
      };
    case typeProducts.removeProductFirebaseSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedProduct: true,
        isLoading: false,
        data: state.data.filter((product) => {
          return product.id != payload.data;
        }),
      };
    case typeProducts.updateProductFirebaseSuccess:
      return {
        ...state,
        isCreatedOrUpdatedOrDeletedProduct: true,
        isLoading: false,
        data: state.data.map((product) => {
          if (product.id == payload.data.id) {
            return payload.data;
          }
          return product;
        }),
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
