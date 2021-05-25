import { typeOrder } from "../sagas/order.saga";

const initialState = {
  orders: [],
  isLoadingOrder: false,
  isLoadingCrudOrder: false,
  ordered: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case typeOrder.showLoadingOrder:
      return {
        ...state,
        isLoadingOrder: true,
      };
    case typeOrder.showLoadingCrudOrder:
      return {
        ...state,
        isLoadingCrudOrder: true,
      };
    case typeOrder.resetOrder:
      return {
        ...state,
        ordered: false,
      };
    case typeOrder.fetchOrderSuccess:
      return {
        ...state,
        isLoadingOrder: false,
        orders: action.payload.orders,
      };
    case typeOrder.createOrderSuccess:
      return {
        ...state,
        isLoadingCrudOrder: false,
        ordered: true,
      };
    default:
      return state;
  }
};

export default reducer;
