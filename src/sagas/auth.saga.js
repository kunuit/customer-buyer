import { takeEvery, put, call, takeLatest, select } from "redux-saga/effects";
import { loginAdminAPI, loginAPI, registerAPI } from "../apis/auth.api";

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
  switchIsAdmin: "SWITCH_IS_ADMIN",

  showAuthLoading: "SHOW_AUTH_LOADING",
  showRegisterLoading: "SHOW_REGISTER_LOADING",

  refreshTokenSuccess: "REFRESH_TOKEN_SUCCESS",
  refreshTokenFail: "REFRESH_TOKEN_FAIL",
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
  const loginRes = yield call(loginAPI, action.payload);
  const { payload, code, message } = loginRes.data;

  console.log(loginRes.data, "check login Res");

  if (code == statusCode.success) {
    // lưu token and role vào local storage
    setLocal(typeAuths.authLocal, payload);
    // go to my profile
    yield put({
      type: typeAuths.loginSuccess,
      payload: {
        data: payload,
      },
    });
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
  removeLocal(typeAuths.authLocal);
}

function* registerSaga(action) {
  // show loading and block button
  yield put({ type: typeAuths.showRegisterLoading });
  //call api
  const registerRes = yield call(registerAPI, action.payload);

  const { payload, code, message } = registerRes.data;
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
  takeLatest(typeAuths.login, loginSaga),
  takeLatest(typeAuths.logout, logoutSaga),
  takeLatest(typeAuths.register, registerSaga),
  takeLatest(typeAuths.authLocal, checkAuthLocal),
];
