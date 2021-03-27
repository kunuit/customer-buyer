import { takeEvery, put, call, takeLatest, select } from "redux-saga/effects";
import { loginAdminAPI, loginAPI, registerAPI } from "../apis/auth.api";

import { LOGIN, REGISTER } from "../constants/auth.constants";
import {
  hideAuthLoadingACT,
  loginFailACT,
  loginSuccessACT,
  registerFailACT,
  registerSuccessACT,
  showAuthLoadingACT,
} from "../actions/auth.action";

function* loginSaga({ payload }) {
  // get is customer or admin login
  const { isAdmin } = yield select((state) => state.auth);
  // show loading and block button
  yield put(showAuthLoadingACT());
  //call api
  const loginRes = isAdmin ? loginAdminAPI() : loginAPI();
  // ? yield call(loginAPI, payload.data)
  // : yield call(loginAdminAPI, payload.data);

  const { data, statusCode } = loginRes.data;

  if (statusCode == 200) {
    // go to my profile
    yield put(loginSuccessACT(data));
  } else {
    // res error
    yield put(loginFailACT(data));
  }
  // hide loading and unblock button
  yield put(hideAuthLoadingACT());
}

function* registerSaga({ payload }) {
  // show loading and block button
  yield put(showAuthLoadingACT());
  //call api
  const registerRes = yield call(registerAPI, payload.data);

  const { data, statusCode } = registerRes.data;
  if (statusCode == 200) {
    // back to login or home
    yield put(registerSuccessACT(data));
  } else {
    // res error
    yield put(registerFailACT(data));
  }
  // hide loading and unblock button
  yield put(hideAuthLoadingACT());
}

export const authSagas = [
  takeLatest(LOGIN, loginSaga),
  takeLatest(REGISTER, registerSaga),
];
