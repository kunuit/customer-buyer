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
  updateProduct_FiB_API,
  removeProduct_FiB_API,
  queryProduct_FiB_API,
} from "../apis/firebase/product.firebase";
import { getProductsAPI } from "../apis/product.api";
import { showToast } from "../common/Layout/toast.helper";
import { statusCode } from "../constants/API.constants";
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
  // update product
  updateProductFirebase: "UPDATE_PRODUCT_FIREBASE",
  updateProductFirebaseSuccess: "UPDATE_PRODUCT_FIREBASE_SUCCESS",
  updateProductFirebaseFail: "UPDATE_PRODUCT_FIREBASE_FAIL",
  // remove product
  removeProductFirebase: "REMOVE_PRODUCT_FIREBASE",
  removeProductFirebaseSuccess: "REMOVE_PRODUCT_FIREBASE_SUCCESS",
  removeProductFirebaseFail: "REMOVE_PRODUCT_FIREBASE_FAIL",
  // query product
  queryProductFirebase: "QUERY_PRODUCT_FIREBASE",
  queryProductFirebaseSuccess: "QUERY_PRODUCT_FIREBASE_SUCCESS",
  // fetchProduct
  fetchProduct: "FETCH_PRODUCT",
  fetchProductSuccess: "FETCH_PRODUCT_SUCCESS",
  fetchProductFail: "FETCH_PRODUCT_FAIL",
};

export const statusProduct = Object.freeze({
  notExit: 5,
  outOfStock: 2,
  available: 1,
});

function* fetchProductFirebaseSaga() {
  yield put({ type: typeProducts.showLoadingProduct });

  const productRes = yield call(getAllProduct_FiB_API);
  const { code, data } = productRes;
  const transitData = Object.values(data);
  if (code == 200) {
    yield put({
      type: typeProducts.fetchProductFirebaseSuccess,
      payload: {
        data: transitData,
      },
    });
  } else {
    showToast({ title: Product, type: "error", message: data });
  }
}

function* createProductFirebaseSaga({ type, payload }) {
  const createProductRes = yield call(createProduct_FiB_API, payload.data);
  const { code, data } = createProductRes;
  if (code == 200) {
    yield put({
      type: typeProducts.createProductFirebaseSuccess,
      payload: {
        data: payload.data,
      },
    });
  } else {
    showToast({ title: Product, type: "error", message: data });
  }
}

function* updateProructFirebaseSaga({ type, payload }) {
  console.log(payload, "check update");
  const updateProductRes = yield call(updateProduct_FiB_API, payload.data);
  const { code, data } = updateProductRes;
  if (code == 200) {
    yield put({
      type: typeProducts.updateProductFirebaseSuccess,
      payload: {
        data: payload.data,
      },
    });
  } else {
    showToast({ title: Product, type: "error", message: data });
  }
}

function* removeProductFirebaseSaga({ type, payload }) {
  const removeProductRes = yield call(removeProduct_FiB_API, payload.index);
  const { code, data } = removeProductRes;
  if (code == 200) {
    yield put({
      type: typeProducts.removeProductFirebaseSuccess,
      payload: {
        data: payload.index,
      },
    });
  } else {
    showToast({ title: "Product", type: "error", message: data });
  }
}

function* queryProductFirebaseSaga({ type, payload }) {
  yield put({ type: typeProducts.showLoadingProduct });
  yield delay(300);

  const queryRes = yield call(queryProduct_FiB_API, payload.data);
}

function* fetchProductSaga(action) {
  // loading
  yield put({ type: typeProducts.showLoadingProduct });
  // call API product
  const productRes = yield call(getProductsAPI);
  const { payload, code, error, message } = productRes.data;
  // nếu đúng thì gọi action success sai thì show Toast
  if (code == statusCode.success) {
    console.log(payload, "check payload data");
    yield put({
      type: typeProducts.fetchProductSuccess,
      payload: {
        data: payload,
      },
    });
  } else {
    showToast({ title: "Product", type: "error", message: message });
  }
}

export const productSagas = [
  // takeEvery("FETCH_PRODUCTS", fetchAllProducts),
  takeLatest(typeProducts.fetchProductFirebase, fetchProductFirebaseSaga),
  takeLatest(typeProducts.createProductFirebase, createProductFirebaseSaga),
  takeLatest(typeProducts.updateProductFirebase, updateProructFirebaseSaga),
  takeLatest(typeProducts.removeProductFirebase, removeProductFirebaseSaga),
  takeLatest(typeProducts.queryProductFirebase, queryProductFirebaseSaga),
  takeLatest(typeProducts.fetchProduct, fetchProductSaga),
];
