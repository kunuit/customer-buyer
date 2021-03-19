import { takeEvery, put, call } from "redux-saga/effects";
import { getProducts } from "../apis/product.api";
function* fetchAllProducts(action) {
  const products = yield call(getProducts);
  yield put({
    type: "GET_PRODUCTS",
    payload: products.data,
  });
}
function* rootSaga() {
  yield takeEvery("FETCH_PRODUCTS", fetchAllProducts);
}

export default rootSaga;
