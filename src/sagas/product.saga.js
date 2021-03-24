import { call, put } from "@redux-saga/core/effects";

import { getProducts } from "../apis/product.api";

function* fetchAllProducts(action) {
  const products = yield call(getProducts);
  console.log(products);
  yield put({
    type: "GET_PRODUCTS",
    payload: products.data,
  });
}

export const productSagas = [
  // takeEvery("FETCH_PRODUCTS", fetchAllProducts);
];
