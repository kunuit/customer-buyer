import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import { create } from "react-test-renderer";
import {
  getAllProduct_FiB_API,
  createProduct_FiB_API,
  updateProduct_FiB_API,
  removeProduct_FiB_API,
  queryProduct_FiB_API,
} from "../apis/firebase/product.firebase";
import {
  getProductsAPI,
  createProductAPI,
  removeProductAPI,
  updateProductAPI,
} from "../apis/product.api";
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
  showLoadingFilterByCategory: "SHOW_LOADING_FILTER_BY_CATEGORY",
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
  // create product
  createProduct: "CREATE_PRODUCT",
  createProductSuccess: "CREATE_PRODUCT_SUCCESS",
  createProductFail: "CREATE_PRODUCT_FAIL",
  // remove product
  removeProduct: "REMOVE_PRODUCT",
  removeProductSuccess: "REMOVE_PRODUCT_SUCCESS",
  // update product
  updateProduct: "UPDATE_PRODUCT",
  updateProductSuccess: "UPDATE_PRODUCT_SUCCESS",
  // filter product by category
  filterProductByCategory: "FILTER_PRODUCT_BY_CATEGORY",
  filterProductByCategorySuccess: "FILTER_PRODUCT_BY_CATEGORY_SUCCESS",
};

export const statusProduct = Object.freeze({
  notExit: 5,
  outOfStock: 2,
  available: 1,
});

export const statusFilter = Object.freeze({
  default: -1,
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

function* createProductSaga(action) {
  const { urlProducts } = yield select((state) => state.uploads);
  const createRes = yield call(
    createProductAPI,
    { ...action.payload.data, imageUrls: urlProducts },
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikt1bmlvbiIsImZ1bGxOYW1lIjoiVsWpIFh1w6JuIEPGsOG7nW5nICIsInJvbGUiOiJzdGFmZiIsImlhdCI6MTYxOTA1NjUyOSwiZXhwIjoxNjIwNzg0NTI5fQ.3E5t0lLzETabhZjoldgGQIFq9YPAQi4D7Mubk3Hwehc"
  );
  const { payload, code, error, message } = createRes.data;
  //! check here
  if (!error) {
    console.log(payload, "check payload create data");
    yield put({
      type: typeProducts.createProductSuccess,
      payload: {
        data: { ...action.payload.data, imageUrls: urlProducts },
      },
    });
  } else {
    showToast({ title: "Product", type: "error", message: message });
  }
}

function* removeProductSaga(action) {
  console.log(`action.payload.data`, action.payload.data);
  // show loadding
  // call api
  const removeRes = yield call(
    removeProductAPI,
    action.payload.data,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikt1bmlvbiIsImZ1bGxOYW1lIjoiVsWpIFh1w6JuIEPGsOG7nW5nICIsInJvbGUiOiJzdGFmZiIsImlhdCI6MTYxOTA1NjUyOSwiZXhwIjoxNjIwNzg0NTI5fQ.3E5t0lLzETabhZjoldgGQIFq9YPAQi4D7Mubk3Hwehc"
  );
  const { payload, code, error, message } = removeRes.data;
  if (!error) {
    // findIndex product and slice to new arr
    const productState = yield select((state) => state.products);
    const indexProduct = productState.data.findIndex(
      (product) => product.id == action.payload.data
    );
    productState.data.splice(indexProduct, 1);
    // put success
    yield put({
      type: typeProducts.removeProductSuccess,
      payload: {
        data: productState.data,
      },
    });
  } else {
    showToast({ title: "Product", type: "error", message: message });
  }
}

function* updateProductSaga(action) {
  // show loading update
  // get urlProducts from state
  const { urlProducts } = yield select((state) => state.uploads);
  console.log(
    `action.payload.data.imageUrls, urlProducts`,
    action.payload.data.imageUrls,
    urlProducts
  );
  // const urlProductTmp = [...action.payload.data.imageUrls, ...urlProducts];
  // call api
  const updateRes = yield call(
    updateProductAPI,
    action.payload.id,
    {
      ...action.payload.data,
      imageUrls: [...action.payload.data.imageUrls, ...urlProducts],
    },
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikt1bmlvbiIsImZ1bGxOYW1lIjoiVsWpIFh1w6JuIEPGsOG7nW5nICIsInJvbGUiOiJzdGFmZiIsImlhdCI6MTYxOTA1NjUyOSwiZXhwIjoxNjIwNzg0NTI5fQ.3E5t0lLzETabhZjoldgGQIFq9YPAQi4D7Mubk3Hwehc"
  );
  console.log(updateRes, "check updateRes");
  const { payload, code, error, message } = updateRes.data;
  if (!error) {
    console.log(`payload`, payload);
    // findIndex product and slice to new arr
    const productState = yield select((state) => state.products);
    const indexProduct = productState.data.findIndex(
      (product) => product.id == action.payload.id
    );
    // put success
    yield put({
      type: typeProducts.updateProductSuccess,
      payload: {
        data: [
          ...productState.data.slice(0, indexProduct),
          {
            ...action.payload.data,
            imageUrls: [...action.payload.data.imageUrls, ...urlProducts],
            id: action.payload.id,
          },
          ...productState.data.slice(indexProduct + 1),
        ],
      },
    });
  }
}

function* filterProductByCategorySaga(action) {
  // show loading filter,
  yield put({ type: typeProducts.showLoadingFilterByCategory });
  // select state product and category
  const { data, productByCategory } = yield select((state) => state.products);
  console.log(`action.payload.id, `, action.payload.id);
  yield put({
    type: typeProducts.filterProductByCategorySuccess,
    payload: {
      productByCategory:
        action.payload.id == statusFilter.default
          ? data
          : data.filter((product) => product.categoryId == action.payload.id),
    },
  });
}

export const productSagas = [
  // takeEvery("FETCH_PRODUCTS", fetchAllProducts),
  takeLatest(typeProducts.fetchProductFirebase, fetchProductFirebaseSaga),
  takeLatest(typeProducts.createProductFirebase, createProductFirebaseSaga),
  takeLatest(typeProducts.updateProductFirebase, updateProructFirebaseSaga),
  takeLatest(typeProducts.removeProductFirebase, removeProductFirebaseSaga),
  takeLatest(typeProducts.queryProductFirebase, queryProductFirebaseSaga),
  takeLatest(typeProducts.fetchProduct, fetchProductSaga),
  takeLatest(typeProducts.createProduct, createProductSaga),
  takeLatest(typeProducts.removeProduct, removeProductSaga),
  takeLatest(typeProducts.updateProduct, updateProductSaga),
  takeLatest(typeProducts.filterProductByCategory, filterProductByCategorySaga),
];
