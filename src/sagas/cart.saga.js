import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import {
  addToCart_FiB_API,
  getCart_FiB_API,
  updateCart_Fib_API,
  removeOutCart_Fib_API,
} from "../apis/firebase/cart.firebase";
import { getAllProduct_FiB_API } from "../apis/firebase/product.firebase";
import { showToast } from "../common/Layout/toast.helper";

export const typeCarts = {
  // fetch cart
  fetchCartFirebase: "FETCH_CART_FIREBASE",
  fetchCartFirebaseSuccess: "FETCH_CART_FIREBASE_SUCCESS",
  // loading
  showLoadingCart: "SHOW_LOADING_CART",
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
};

function* fetchCartSaga({ type, payload }) {
  // show loading
  yield put({ type: typeCarts.showLoadingCart });
  // call
  const { code, data } = yield call(getCart_FiB_API);
  // handle
  if (code == 200) {
    const transitData = Object.values(data);
    const dataProduct = yield call(getAllProduct_FiB_API);
    const transitDataProduct = Object.values(dataProduct.data);

    const realCart = transitData.map((item) => {
      const filteredProduct = transitDataProduct.filter((product) => {
        if (product.id == item.id) return product;
      });

      if (filteredProduct.length == 0)
        return {
          name: "product not exits",
          quantity: item.quantity,
          price: 300,
          description: "none",
          images: [
            "https://theme.hstatic.net/1000273444/1000452469/14/no-img.png?v=1804",
          ],
          status: 5,
          id: item.id,
        };
      return {
        ...filteredProduct[0],
        quantity: item.quantity,
      };
    });

    yield put({
      type: typeCarts.fetchCartFirebaseSuccess,
      payload: {
        data: realCart,
      },
    });
  } else {
    showToast({ title: "Cart", type: "error", message: data });
  }
}

function* addToCartSaga({ type, payload }) {
  const dataCart = yield call(getCart_FiB_API);
  const transitDataCart = Object.values(dataCart.data);

  console.log(transitDataCart, "check data cart get");
  // const filteredCart = transitDataCart.filter((cart) => {
  //   if (cart.id == payload.data.id) return cart;
  // });

  //* check new product is included in cart
  const filteredCart = transitDataCart.find(
    (item) => item.id == payload.data.id
  );

  console.log(
    transitDataCart.find((item) => item.id == payload.data.id),
    "check data filter"
  );

  if (filteredCart) {
    showToast({
      title: "Cart",
      type: "success",
      message: `${payload.data.name} is added to your cart`,
    });
    yield put({
      type: typeCarts.updateCart,
      payload: {
        data: payload.data.id,
        quantity: filteredCart.quantity + payload.quantity,
      },
    });
  } else {
    const { code, data } = yield call(addToCart_FiB_API, {
      id: payload.data.id,
      quantity: payload.quantity,
    });
    if (code == 200) {
      showToast({
        title: "Cart",
        type: "success",
        message: `${payload.data.name} is added to your cart`,
      });
      yield put({
        type: typeCarts.addtoCartSuccess,
        payload: {
          data: { ...payload.data, quantity: 1 },
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
}

function* updateCartSaga({ type, payload }) {
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
  takeLatest(typeCarts.fetchCartFirebase, fetchCartSaga),
  takeEvery(typeCarts.updateCart, updateCartSaga),
  takeEvery(typeCarts.removeOutCart, removeOutCartSaga),
];
