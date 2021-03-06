import { takeEvery, put, call, takeLatest, select } from "redux-saga/effects";
import {
  loginAdminAPI,
  loginAPI,
  registerAPI,
  setTokenHeaderSevice,
} from "../apis/auth.api";

import {
  loginFirebaseAPI,
  logoutFirebaseAPI,
} from "../apis/firebase/auth.firebase";

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
import {
  getLocal,
  removeLocal,
  setLocal,
} from "../common/storeLocal/Auth.local";
import { statusCode } from "../constants/API.constants";

export const typeAuths = {
  authLocal: "AUTH_LOCAL",
  isAuthLocal: "IS_AUTH_LOCAL",
  login: "LOGIN",
  loginFail: "LOGIN_FAIL",
  loginSuccess: "LOGIN_SUCCESS",

  googleLogin: "GOOGLE_LOGIN",
  googleLoginFail: "GOOGLE_LOGIN_FAIL",
  googleLoginSuccess: "GOOGLE_LOGIN_SUCCESS",

  loginFirebase: "LOGIN_FIREBASE",
  loginFirebaseSuccess: "LOGIN_FIREBASE_SUCCESS",
  loginFirebaseFail: "LOGIN_FIREBASE_FAIL",

  register: "REGISTER",
  registerFail: "REGISTER_FAIL",
  registerSuccess: "REGISTER_SUCCESS",

  logout: "LOGOUT",
  resetRegister: "RESET_REGISTER",

  showAuthLoading: "SHOW_AUTH_LOADING",
  showRegisterLoading: "SHOW_REGISTER_LOADING",

  refreshTokenSuccess: "REFRESH_TOKEN_SUCCESS",
  refreshTokenFail: "REFRESH_TOKEN_FAIL",

  requireLogin: "REQUIRE_LOGIN",
};

export const role = {
  user: "user",
  staff: "staff",
  owner: "owner",
};

function* loginSaga(action) {
  // show loading and block button
  yield put({ type: typeAuths.showAuthLoading });
  //call api
  const { payload, code, message } = yield call(loginAPI, action.payload);

  if (code == statusCode.success) {
    // go to my profile
    yield put({
      type: typeAuths.loginSuccess,
      payload: {
        data: payload,
      },
    });

    yield call(setTokenHeaderSevice, payload.token);
  } else {
    // res error
    yield put({
      type: typeAuths.loginFail,
      payload: {
        error: message,
      },
    });
  }
}

function* registerSaga(action) {
  // show loading and block button
  yield put({ type: typeAuths.showRegisterLoading });
  //call api
  const { payload, code, message } = yield call(registerAPI, action.payload);

  console.log(`message`, message);
  if (code == statusCode.success) {
    // back to login or home
    yield put({
      type: typeAuths.registerSuccess,
      payload: {
        data: payload,
      },
    });
  } else {
    // res error
    yield put({
      type: typeAuths.registerFail,
      payload: {
        error: message,
      },
    });
  }
}

function* logoutSaga() {
  console.log("logout in saga");
  yield call(setTokenHeaderSevice, null);
}

export const authSagas = [
  takeLatest(typeAuths.login, loginSaga),
  takeLatest(typeAuths.register, registerSaga),
  takeLatest(typeAuths.logout, logoutSaga),
];
