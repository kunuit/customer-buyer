import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import {
  getAllProduct_FiB_API,
  createProduct_FiB_API,
} from "../apis/firebase/product.firebase";
import productAction from "../actions/product.action";
import { showToast } from "../common/Layout/toast.helper";
import Product from "../containers/screens/Product";

// import { getProductsAPI } from "../apis/product.api";

// import { watchRefreshToken } from "./utilSagas.saga";

// function* fetchAllProducts(action) {
//   const { token } = yield select((state) => state.auth);
//   const resProduct = yield call(getProductsAPI, token);
//   const { data, statusCode } = resProduct.data;
//   if (statusCode == 202) {
//     yield watchRefreshToken();
//     yield fetchAllProducts(action);
//   } else if (statusCode == 200) {
//     yield put({
//       type: "GET_PRODUCTS",
//       payload: [{ name: "kun" }, { name: "kong" }],
//     });
//   } else {
//     console.log(data, "check others");
//   }
// }
export const typeProducts = {
  // get product
  fetchProductFirebase: "FETCH_PRODUCT_FIREBASE",
  fetchProductFirebaseSuccess: "FETCH_PRODUCT_FIREBASE_SUCCESS",
  fetchProductFirebaseFail: "FETCH_PRODUCT_FIREBASE_FAIL",
  // loading
  showLoadingProduct: "SHOW_LOADING_PRODUCT",
  showLoadingCreateProduct: "SHOW_LOADING_CREATE_PRODUCT",
  hiddenLoadingProduct: "HIDDEN_LOADING_PRODUCT",
  // create product
  createProductFirebase: "CREATE_PRODUCT_FIREBASE",
  createProductFirebaseSuccess: "CREATE_PRODUCT_FIREBASE_SUCCESS",
  createProductFirebaseFail: "CREATE_PRODUCT_FIREBASE_FAIL",
  // reset form create product
  resetCreateProduct: "RESET_CREATE_PRODUCT",
};

function* fetchProductSaga() {
  yield put({ type: typeProducts.showLoadingProduct });

  const productRes = yield call(getAllProduct_FiB_API);
  const { code, data } = productRes;
  if (code == 200) {
    yield put({
      type: typeProducts.fetchProductFirebaseSuccess,
      payload: {
        data,
      },
    });
  } else {
    showToast({ title: Product, type: "error", message: data });
  }
}

function* createProductSaga(action) {
  // yield put({})

  const productRes = yield call(getAllProduct_FiB_API);
  const { code, data } = productRes;
  var tmpData = [...data, action.payload.data];
  if (code == 200) {
    const createProductRes = yield call(createProduct_FiB_API, tmpData);
    const { code, data } = createProductRes;
    if (code == 200) {
      yield put({
        type: typeProducts.createProductFirebaseSuccess,
      });

      yield put({ type: typeProducts.fetchProductFirebase });
    } else {
      showToast({ title: Product, type: "error", message: data });
    }
  } else {
    showToast({ title: Product, type: "error", message: data });
  }
}

export const productSagas = [
  // takeEvery("FETCH_PRODUCTS", fetchAllProducts),
  takeLatest(typeProducts.fetchProductFirebase, fetchProductSaga),
  takeLatest(typeProducts.createProductFirebase, createProductSaga),
];
