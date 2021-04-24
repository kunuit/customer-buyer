import {
  call,
  put,
  select,
  delay,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { addToCartAPI, getCartAPI } from "../apis/cart.api";
import {
  addToCart_FiB_API,
  getCart_FiB_API,
  updateCart_Fib_API,
  removeOutCart_Fib_API,
} from "../apis/firebase/cart.firebase";
import { getAllProduct_FiB_API } from "../apis/firebase/product.firebase";
import { showToast } from "../common/Layout/toast.helper";
import { statusProduct } from "./product.saga";

export const typeCarts = {
  // fetch cart firebase
  fetchCartFirebase: "FETCH_CART_FIREBASE",
  fetchCartFirebaseSuccess: "FETCH_CART_FIREBASE_SUCCESS",
  // fetch cart
  fetchCart: "FETCH_CART",
  fetchCartSuccess: "FETCH_CART_SUCCESS",
  // loading
  showLoadingCart: "SHOW_LOADING_CART",
  showLoadingUpdateCart: "SHOW_LOADING_UPDATE_CART",
  // add 1 product to cart
  addtoCart: "ADD_TO_CART",
  addtoCartSuccess: "ADD_TO_CART_SUCCESS",

  // update product in cart
  updateCart: "UPDATE_CART",
  updateCartSuccess: "UPDATE_CART_SUCCESS",
  // remove
  removeOutCart: "REMOVE_PRODUCT_OUT_CART",
  removeOutCartSuccess: "REMOVE_PRODUCT_OUT_CART",
  // reset
  resetCreateCart: "RESET_CREATE_CART",
  // updateCheckoutList
  inActiveToCheckout: "INACTIVE_TO_CHECKOUT",
  activeToCheckout: "ACTIVE_TO_CHECKOUT",
};

export const statusCart = {
  activeToCheckout: 1,
  inActiveToCheckout: 0,
};

function* fetchCartSaga(action) {
  // show loading
  yield put({ type: typeCarts.showLoadingCart });
  // call
  const { token } = yield select((state) => state.auth);
  console.log(`token`, token);
  const fetchRes = yield call(
    getCartAPI,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkN1c3RvbWVyIiwiZnVsbE5hbWUiOiJWxakgWHXDom4gQ8aw4budbmcgIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2MTkyNDU3MzksImV4cCI6MTYyMDk3MzczOX0.ScUaJHrUW-hRvU4QFPU66qA_qKHRhF7pWISQ_PnpB7w"
  );
  console.log(`fetchRes.data`, fetchRes.data);
  const { payload, error, message } = fetchRes.data;
  console.log(`payload.cartItems`, payload.cartItems);
  if (!error) {
    yield put({
      type: typeCarts.fetchCartSuccess,
      payload: {
        cartId: payload.id,
        cartItems: payload.cartItems,
      },
    });
  } else {
    showToast({ title: "Cart", type: "error", message: data });
  }
}

function* addToCartSaga({ type, payload }) {
  // select token
  const { token } = yield select((state) => state.auth);
  // call api
  const addToCartRes = yield call(
    addToCartAPI,
    { productId: payload.data.id, quantity: payload.quantity },
    token
  );

  console.log(`addToCartRes.data`, addToCartRes.data);

  // if (filteredCart) {
  //   showToast({
  //     title: "Cart",
  //     type: "success",
  //     message: `${payload.data.name} is added to your cart`,
  //   });
  //   yield put({
  //     type: typeCarts.updateCart,
  //     payload: {
  //       data: payload.data.id,
  //       quantity: filteredCart.quantity + payload.quantity,
  //     },
  //   });
  // } else {
  //   const { code, data } = yield call(addToCart_FiB_API, {
  //     id: payload.data.id,
  //     quantity: payload.quantity,
  //   });
  //   if (code == 200) {
  //     showToast({
  //       title: "Cart",
  //       type: "success",
  //       message: `${payload.data.name} is added to your cart`,
  //     });
  //     yield put({
  //       type: typeCarts.addtoCartSuccess,
  //       payload: {
  //         data: { ...payload.data, quantity: payload.quantity },
  //       },
  //     });
  //   } else {
  //     showToast({
  //       title: "Cart",
  //       type: "error",
  //       message: data,
  //     });
  //   }
  // }
}

function* updateCartSaga({ type, payload }) {
  yield put({ type: typeCarts.showLoadingUpdateCart });
  // delay to take latest value of cart
  yield delay(500);

  console.log(payload.quantity, "check latest payload");
  const { code, data } = yield call(updateCart_Fib_API, {
    id: payload.data,
    quantity: payload.quantity,
  });

  if (code == 200) {
    yield put({
      type: typeCarts.updateCartSuccess,
      payload: {
        data: payload.data,
        quantity: payload.quantity,
      },
    });
  } else {
    showToast({
      title: "Cart",
      type: "error",
      message: data,
    });
  }
}

function* removeOutCartSaga({ type, payload }) {
  console.log(payload.data);
  const { code, data } = yield call(removeOutCart_Fib_API, payload.data);

  if (code == 200) {
    // showToast({
    //   title: "Cart",
    //   type: "success",
    //   message: `The product is deleted in your cart`,
    // });
    // yield put({
    //   type: typeCarts.removeOutCartSuccess,
    //   payload: {
    //     data: payload.data,
    //   },
    // });
  } else {
    showToast({
      title: "Cart",
      type: "error",
      message: data,
    });
  }
}

export const cartSagas = [
  takeEvery(typeCarts.addtoCart, addToCartSaga),
  takeLatest(typeCarts.updateCart, updateCartSaga),
  takeEvery(typeCarts.removeOutCart, removeOutCartSaga),
  // takeEvery(typeCarts.updateCheckoutList, updateCheckoutListSaga),
  takeLatest(typeCarts.fetchCart, fetchCartSaga),
];
