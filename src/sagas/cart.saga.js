import { call, takeEvery } from "@redux-saga/core/effects";
import { addToCart_FiB_API } from "../apis/firebase/cart.firebase";

export const typeCarts = {
  addtoCart: "ADD_TO_CART",

  removeOutCart: "REMOVE_PRODUCT_OUT_CART",
};

function* addToCartSaga({ type, payload }) {
  const { code, data } = yield call(addToCart_FiB_API, {
    id: payload.data,
    quantity: 1,
  });
}

export const cartSagas = [takeEvery(typeCarts.addtoCart, addToCartSaga)];
