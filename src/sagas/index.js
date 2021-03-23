import { takeEvery, put, call, takeLatest } from "redux-saga/effects";
import { getProducts } from "../apis/product.api";
import { login } from "../apis/auth.api";

import { LOGIN } from "../constants/auth.constants";
import { loginFail, loginSuccess } from "../actions/auth.action";

function* fetchAllProducts(action) {
  // const products = yield call(getProducts);
  yield put({
    type: "GET_PRODUCTS",
    payload: [
      { name: "kun", lv: 10 },
      { name: "kong", lv: 10 },
    ],
  });
}

function* fetchLogin({ payload }) {
  const loginRes = yield call(login, payload.data);
  console.log(loginRes, "check res");
  const { data, statusCode } = loginRes.data;

  if (statusCode == 200) {
    yield put(loginSuccess(data));
  } else {
    yield put(loginFail(data));
  }
}

function* rootSaga() {
  // yield takeEvery("FETCH_PRODUCTS", fetchAllProducts);
  yield takeLatest(LOGIN, fetchLogin);
}

export default rootSaga;
