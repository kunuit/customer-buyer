import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import { getProducts } from "../apis/product.api";
import { loginAPI, registerAPI } from "../apis/auth.api";

import { LOGIN, REGISTER } from "../constants/auth.constants";
import {
  loginFailACT,
  loginSuccessACT,
  registerFailACT,
  registerSuccessACT,
} from "../actions/auth.action";

function* fetchAllProducts(action) {
  const products = yield call(getProducts);
  console.log(products);
  yield put({
    type: "GET_PRODUCTS",
    payload: products.data,
  });
}

function* loginSaga({ payload }) {
  const loginRes = yield call(loginAPI, payload.data);
  console.log(loginRes, "check res");
  const { data, statusCode } = loginRes.data;

  if (statusCode == 200) {
    yield put(loginSuccessACT(data));
  } else {
    yield put(loginFailACT(data));
  }
}

function* registerSaga({ payload }) {
  const registerRes = yield call(registerAPI, payload.data);
  console.log(registerRes, "check res");
  const { data, statusCode } = registerRes.data;

  if (statusCode == 200) {
    yield put(registerSuccessACT(data));
  } else {
    yield put(registerFailACT(data));
  }
}

function* rootSaga() {
  // yield takeEvery("FETCH_PRODUCTS", fetchAllProducts);
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}

export default rootSaga;
