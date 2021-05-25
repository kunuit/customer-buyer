import { put, takeLatest, call, select } from "@redux-saga/core/effects";
import { delay } from "redux-saga/effects";
import { createOrderAPI, getOrderAPI } from "../apis/order.api";
import { showToast } from "../common/Layout/toast.helper";
import { typeCarts } from "./cart.saga";

export const typeOrder = {
  // loading
  showLoadingOrder: "SHOW_LOADING_ORDER",
  showLoadingCrudOrder: "SHOW_LOADING_CRUD_ORDER",
  // get Order
  fetchOrder: "FETCH_ORDER",
  fetchOrderSuccess: "FETCH_ORDER_SUCCESS",
  // create order
  createOrder: "CREATE_ORDER",
  createOrderSuccess: "CREATE_ORDER_SUCCESS",
  // reset order
  resetOrder: "RESET_ORDER",
};

export const orderStatus = Object.freeze({
  pending: "pending",
  processing: "processing",
  delivering: "exported",
  delivered: "delivered",
  cancelled: "cancelled",
  return: "return",
});

function* fetchOrderSaga(action) {
  // show loading
  yield put({ type: typeOrder.showLoadingOrder });

  // call API
  const { code, error, message, payload } = yield call(getOrderAPI);

  yield delay(300);
  if (error) {
    showToast({ title: "Order", type: "error", message: message });
  } else {
    yield put({
      type: typeOrder.fetchOrderSuccess,
      payload: {
        orders: payload,
      },
    });
  }
}

function* createOrderSaga(action) {
  // show loading
  yield put({ type: typeOrder.showLoadingCrudOrder });

  // console.log(`action.payload.prodcuctIds`, action.payload.productIds);
  // call API
  const { code, error, message, payload } = yield call(createOrderAPI, {
    address: "KTX khu B",
    phone: "0961010874",
    productIds: action.payload.productIds,
  });

  if (error) {
    showToast({ title: "Order", type: "error", message: message });
  } else {
    yield put({
      type: typeOrder.createOrderSuccess,
    });
    yield put({ type: typeCarts.fetchCart });
  }
}

export const orderSagas = [
  takeLatest(typeOrder.fetchOrder, fetchOrderSaga),
  takeLatest(typeOrder.createOrder, createOrderSaga),
];
