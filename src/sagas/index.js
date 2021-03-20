import { takeEvery, put, call } from "redux-saga/effects";
import { getProducts } from "../apis/product.api";
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
function* rootSaga() {
  yield takeEvery("FETCH_PRODUCTS", fetchAllProducts);
}

export default rootSaga;
