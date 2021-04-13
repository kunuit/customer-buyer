import { takeEvery, put, call, takeLatest, select } from "redux-saga/effects";
import { loginAdminAPI, loginAPI, registerAPI } from "../apis/auth.api";

import {
  loginFirebaseAPI,
  logoutFirebaseAPI,
} from "../apis/firebase/auth.firebase";

import {
  GOOGLE_LOGIN,
  LOGIN,
  LOGIN_FIREBASE,
  LOGOUT,
  REGISTER,
} from "../constants/auth.constants";
import {
  hideAuthLoadingACT,
  loginFailACT,
  loginSuccessACT,
  loginViaFirebaseACT,
  loginViaFirebaseFailACT,
  loginViaFirebaseSuccessACT,
  registerFailACT,
  registerSuccessACT,
  showAuthLoadingACT,
} from "../actions/auth.action";
import { onGoogleButtonPressAPI } from "../apis/firebase/auth.firebase";
import { getLocal } from "../common/storeLocal/Auth.local";

export const typeAuths = {
  authLocal: "AUTH_LOCAL",
  isAuthLocal: "IS_AUTH_LOCAL",
};

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

function* loginFirebaseSaga({ payload }) {
  yield put(showAuthLoadingACT());

  const loginFirebaseRes = yield call(loginFirebaseAPI, {
    ...payload.data,
    authLocal: typeAuths.authLocal,
  });

  console.log(loginFirebaseRes);

  if (loginFirebaseRes.code && loginFirebaseRes.code == 400) {
    yield put(loginViaFirebaseFailACT(loginFirebaseRes.message));
  } else {
    yield put(loginViaFirebaseSuccessACT(loginFirebaseRes));
  }

  // yield call(loginFirebaseAPI, payload.data);
  // console.log(loginFirebaseRes);
}

function* logoutSaga() {
  yield call(logoutFirebaseAPI, typeAuths.authLocal);
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

function* checkAuthLocal() {
  const authLocalRes = yield call(getLocal, typeAuths.authLocal);
  if (authLocalRes) {
    yield put({
      type: typeAuths.isAuthLocal,
      payload: {
        data: authLocalRes,
      },
    });
  }
}

export const authSagas = [
  takeLatest(LOGIN, loginSaga),
  takeLatest(LOGOUT, logoutSaga),
  takeLatest(REGISTER, registerSaga),
  takeLatest(LOGIN_FIREBASE, loginFirebaseSaga),
  takeLatest(typeAuths.authLocal, checkAuthLocal),
];
