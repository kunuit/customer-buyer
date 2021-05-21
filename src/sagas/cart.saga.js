import {
  call,
  put,
  select,
  delay,
  takeEvery,
  takeLatest,
  debounce,
} from "@redux-saga/core/effects";
import {
  addToCartAPI,
  getCartAPI,
  removeOutCartAPI,
  updateCartAPI,
} from "../apis/cart.api";
import {
  addToCart_FiB_API,
  getCart_FiB_API,
  updateCart_Fib_API,
  removeOutCart_Fib_API,
} from "../apis/firebase/cart.firebase";
import { getAllProduct_FiB_API } from "../apis/firebase/product.firebase";
import { showToast } from "../common/Layout/toast.helper";
import { statusCode } from "../constants/API.constants";
import { statusProduct } from "./product.saga";
import { requireLoginSaga } from "./utilSagas.saga";

export const typeCarts = {
  // fetch cart
  fetchCart: "FETCH_CART",
  fetchCartSuccess: "FETCH_CART_SUCCESS",
  // loading
  showLoadingCart: "SHOW_LOADING_CART",
  showLoadingUpdateCart: "SHOW_LOADING_UPDATE_CART",
  showLoadingAddToCart: "SHOW_LOADING_Add_To_CART",
  // add 1 product to cart
  addtoCart: "ADD_TO_CART",
  addtoCartSuccess: "ADD_TO_CART_SUCCESS",

  // update product in cart
  updateCart: "UPDATE_CART",
  updateAndRemoveCartSuccess: "UPDATE_CART_SUCCESS",
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
  // check token
  const isToken = yield call(requireLoginSaga);
  console.log(`isToken`, isToken);
  if (!isToken) return;
  // call
  const { payload, error, message } = yield call(getCartAPI);

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
    showToast({ title: "Cart", type: "error", message });
  }
}

function* addToCartSaga(action) {
  // show loading add to cart
  yield put({ type: typeCarts.showLoadingAddToCart });

  // check token
  const isToken = yield call(requireLoginSaga);
  console.log(`isToken`, isToken);
  if (!isToken) return;
  // select data in cart
  const { data } = yield select((state) => state.carts);
  const indexProductInCart = data.findIndex(
    (item) => item.productId == action.payload.data._id
  );
  if (indexProductInCart != -1) {
    yield put({
      type: typeCarts.updateCart,
      payload: {
        cartItemId: data[indexProductInCart]._id,
        quantity: data[indexProductInCart].quantity + action.payload.quantity,
      },
    });
    showToast({
      title: "Cart",
      type: "success",
      message: "Add to cart is success",
    });
  } else {
    // call api
    const { status, error, payload, message } = yield call(addToCartAPI, {
      productId: action.payload.data._id,
      quantity: action.payload.quantity,
    });
    console.log(`{ status, error, payload, message }`, {
      status,
      error,
      payload,
      message,
    });
    if (status == statusCode.notAuth) {
      showToast({
        title: "Auth",
        type: "error",
        message: "Please Login",
      });
    } else if (!error) {
      showToast({
        title: "Cart",
        type: "success",
        message,
      });
      yield put({
        type: typeCarts.addtoCartSuccess,
        payload: {
          data: payload,
        },
      });
    } else {
      showToast({
        title: "Cart",
        type: "error",
        message,
      });
    }
  }
}

function* updateCartSaga(action) {
  // show loadingUpdate
  yield put({ type: typeCarts.showLoadingUpdateCart });

  const { token } = yield select((state) => state.auth);

  const { code, error, message, payload } = yield call(
    updateCartAPI,
    {
      cartItemId: action.payload.cartItemId,
      quantity: action.payload.quantity,
    },
    token
  );

  if (error) {
    showToast({
      title: "Cart",
      type: "error",
      message,
    });
  } else {
    const { data } = yield select((state) => state.carts);
    const indexCart = data.findIndex(
      (cart) => cart.id == action.payload.cartItemId
    );

    console.log(`indexCart`, indexCart, data[indexCart]);
    data.splice(indexCart, 1, {
      ...data[indexCart],
      quantity: action.payload.quantity,
    });

    yield put({
      type: typeCarts.updateAndRemoveCartSuccess,
      payload: {
        data,
      },
    });
  }
}

function* removeOutCartSaga(action) {
  // show loadingUpdate
  yield put({ type: typeCarts.showLoadingUpdateCart });
  // get token
  const { token } = yield select((state) => state.auth);
  // call api remove cartItem
  const { code, error, message, payload } = yield call(
    removeOutCartAPI,
    action.payload.cartItemId,
    token
  );
  // get data of cart
  const { data } = yield select((state) => state.carts);

  // error -> show error; !error -> find index to remove it at current cart
  if (!error) {
    // findIndex
    const indexCart = data.findIndex(
      (cart) => cart.id == action.payload.cartItemId
    );
    // remove current cart Item
    data.splice(indexCart, 1);
    // dispatch action
    yield put({
      type: typeCarts.updateAndRemoveCartSuccess,
      payload: {
        data,
      },
    });
  } else {
    // show error
    showToast({
      title: "Cart",
      type: "error",
      message: message,
    });
  }
}

export const cartSagas = [
  takeEvery(typeCarts.addtoCart, addToCartSaga),
  takeEvery(typeCarts.updateCart, updateCartSaga),
  takeEvery(typeCarts.removeOutCart, removeOutCartSaga),
  // takeEvery(typeCarts.updateCheckoutList, updateheckoutListSaga),
  takeLatest(typeCarts.fetchCart, fetchCartSaga),
];
