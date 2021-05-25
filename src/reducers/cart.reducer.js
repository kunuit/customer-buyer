import { typeAuths } from "../sagas/auth.saga";
import { typeCarts } from "../sagas/cart.saga";

const initialState = {
  data: [],
  cartId: null,
  listCheckOutId: [],
  isLoading: false,
  isLoadingAddToCart: false,
  isloadingUpdateCart: false,
  isCreatedOrUpdatedOrDeletedCart: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeCarts.showLoadingCart:
      return {
        ...state,
        isLoading: true,
      };
    case typeCarts.showLoadingAddToCart:
      return {
        ...state,
        isLoadingAddToCart: true,
      };
    case typeCarts.showLoadingUpdateCart:
      return {
        ...state,
        isloadingUpdateCart: true,
      };
    case typeCarts.fetchCartSuccess:
      return {
        ...state,
        isLoading: false,
        data: payload.cartItems,
        cartId: payload.cartId,
        listCheckOutId: [],
      };
    case typeCarts.addtoCartSuccess:
      return {
        ...state,
        data: [...state.data, payload.data],
        isLoadingAddToCart: false,
      };
    case typeCarts.updateAndRemoveCartSuccess:
      return {
        ...state,
        data: payload.data,
        isloadingUpdateCart: false,
        isLoadingAddToCart: false,
      };
    // case typeCarts.removeOutCartSuccess:
    //   return {
    //     ...state,
    //     // filter ra nhung product khac voi product da xoa ở cart
    //     data: payload.data,
    //     isloadingUpdateCart: false,
    //   };
    case typeCarts.activeToCheckout:
      return {
        ...state,
        listCheckOutId: [...state.listCheckOutId, payload.data],
      };
    case typeCarts.inActiveToCheckout:
      return {
        ...state,
        listCheckOutId: state.listCheckOutId.filter((id) => id != payload.data),
      };
    case typeAuths.logout:
      return {
        ...state,
        listCheckOutId: [],
        data: [],
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
