import { typeCarts } from "../sagas/cart.saga";

const initialState = {
  data: [],
  isLoading: false,
  isCreatedOrUpdatedOrDeletedCart: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeCarts.showLoadingCart:
      return {
        ...state,
        isLoading: true,
      };
    case typeCarts.fetchCartFirebaseSuccess:
      return {
        ...state,
        isLoading: false,
        data: payload.data,
      };
    case typeCarts.addtoCartSuccess:
      return {
        ...state,
        // add danh sách các sản phẩm vào cart
        data: [...state.data, payload.data],
      };
    case typeCarts.updateCartSuccess:
      return {
        ...state,
        // duyệt qua các sản phẩm thông qua id và từ đó update sản phẩm đó ở trong state cart
        data: state.data.map((product) => {
          if (product.id == payload.data) {
            return { ...product, quantity: payload.quantity };
          }
          return product;
        }),
      };
    case typeCarts.removeOutCartSuccess:
      return {
        ...state,
        // filter ra nhung product khac voi product da xoa ở cart
        data: state.data.filter((product) => {
          return product.id != payload.data;
        }),
      };
    // reset lại để
    // case typeCarts.resetCreateCart:
    //   return {
    //     ...state,
    //     isCreatedOrUpdatedOrDeletedCart: false,
    //   };
    default:
      return state;
  }
};

export default reducer;
