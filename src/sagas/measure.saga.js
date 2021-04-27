import { put, takeLatest, call, select } from "@redux-saga/core/effects";
import { getMeasureAPI } from "../apis/measure.api";
import { showToast } from "../common/Layout/toast.helper";

export const typeMeasures = {
  // loading
  showLoadingMeasure: "SHOW_LOADING_MEASURE",
  // get categories
  fetchMeasure: "FETCH_MEASURE",
  fetchMeasureSuccess: "FETCH_MEASURE_SUCCESS",
};

function* fetchMeasureSaga(action) {
  // show loading
  yield put({ type: typeMeasures.showLoadingMeasure });
  // select token
  const { token } = yield select((state) => state.auth);
  // call API
  const { code, error, message, payload } = yield call(getMeasureAPI, token);

  if (error) {
    showToast({ title: "Measure", type: "error", message: message });
  } else {
    yield put({
      type: typeMeasures.fetchMeasureSuccess,
      payload: {
        measures: payload,
      },
    });
  }
}

export const measureSagas = [
  takeLatest(typeMeasures.fetchMeasure, fetchMeasureSaga),
];
