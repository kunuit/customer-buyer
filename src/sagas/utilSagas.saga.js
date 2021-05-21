import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { refreshTokenSuccessACT } from "../actions/auth.action";
import { refreshTokenAPI } from "../apis/auth.api";
import { typeAuths } from "./auth.saga";

export const statusFilter = Object.freeze({
  default: -1,
});

export const statusFetch = Object.freeze({
  load: 1,
  loadMore: 2,
});

export function* watchRefreshToken() {
  const { refreshToken } = yield select((state) => state.auth);
  const { data, statusCode } = yield call(refreshTokenAPI, { refreshToken });
  if (statusCode == 400) {
    console.log(data, "hien loi khi call refreshTokenAPI");
  } else {
    yield put(refreshTokenSuccessACT(data));
  }
}

export function* requireLoginSaga() {
  const { token } = yield select((state) => state.auth);
  if (!token) {
    yield put({
      type: typeAuths.requireLogin,
      payload: {
        statusRequireLogin: true,
      },
    });
    return false;
  }

  return true;
}
