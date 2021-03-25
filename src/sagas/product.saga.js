import { call, put, select, takeEvery } from "@redux-saga/core/effects";

import { getProductsAPI } from "../apis/product.api";

import { watchRefreshToken } from "./utilSagas.saga";

function* fetchAllProducts(action) {
  const { token } = yield select((state) => state.auth);
  const resProduct = yield call(getProductsAPI, token);
  const { data, statusCode } = resProduct.data;
  if (statusCode == 202) {
    yield watchRefreshToken();
    yield fetchAllProducts(action);
  } else if (statusCode == 200) {
    yield put({
      type: "GET_PRODUCTS",
      payload: [{ name: "kun" }, { name: "kong" }],
    });
  } else {
    console.log(data, "check others");
  }
}

export const productSagas = [takeEvery("FETCH_PRODUCTS", fetchAllProducts)];
