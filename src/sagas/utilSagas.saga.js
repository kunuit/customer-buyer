import { call, put, select, takeEvery } from "@redux-saga/core/effects";
import { refreshTokenSuccessACT } from "../actions/auth.action";
import { refreshTokenAPI } from "../apis/auth.api";

export function* watchRefreshToken() {
  const { refreshToken } = yield select((state) => state.auth);
  const { data, statusCode } = yield call(refreshTokenAPI, { refreshToken });
  if (statusCode == 400) {
    console.log(data, "hien loi khi call refreshTokenAPI");
  } else {
    yield put(refreshTokenSuccessACT(data));
  }
}
