import {
  call,
  debounce,
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
  queryProductAPI,
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
  showLoadingSearchProduct: "SHOW_LOADING_SEARCH_PRODUCT",
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
  queryProduct: "QUERY_PRODUCT",
  queryProductSuccess: "QUERY_PRODUCT_SUCCESS",
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

function* queryProductSaga(action) {
  // show Loading search
  yield put({ type: typeProducts.showLoadingSearchProduct });
  // delay 500 ms
  yield delay(300);
  // call search api
  const { error, message, code, payload } = yield call(
    queryProductAPI,
    action.payload.searchQuery
  );
  // error -> showToast, !error call action success
  if (error) {
    showToast({ title: "Search", type: "error", message: message });
  } else {
    yield put({
      type: typeProducts.queryProductSuccess,
      payload: {
        queryProduct: payload,
      },
    });
  }
}

function* fetchProductSaga(action) {
  // loading
  yield put({ type: typeProducts.showLoadingProduct });
  // call API product
  const { payload, code, error, message } = yield call(getProductsAPI);
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
  const { token } = yield select((state) => state.auth);
  const { payload, code, error, message } = yield call(
    createProductAPI,
    { ...action.payload.data, imageUrls: urlProducts },
    token
  );
  //! check here
  if (!error) {
    console.log(payload, "check payload create data");
    yield put({
      type: typeProducts.createProductSuccess,
      payload: {
        data: payload,
      },
    });
  } else {
    showToast({ title: "Product", type: "error", message: message });
  }
}

function* removeProductSaga(action) {
  console.log(`action.payload.data`, action.payload.data);
  const { token } = yield select((state) => state.auth);
  // show loadding
  // call api
  const { payload, code, error, message } = yield call(
    removeProductAPI,
    action.payload.data,
    token
  );
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
  const { token } = yield select((state) => state.auth);
  console.log(
    `action.payload.data.imageUrls, urlProducts`,
    action.payload.data.imageUrls,
    urlProducts
  );
  // const urlProductTmp = [...action.payload.data.imageUrls, ...urlProducts];
  // call api
  const { payload, code, error, message } = yield call(
    updateProductAPI,
    action.payload.id,
    {
      ...action.payload.data,
      imageUrls: [...action.payload.data.imageUrls, ...urlProducts],
    },
    token
  );
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
  // select products are filtered
  const { data, productByCategory } = yield select((state) => state.products);
  // check it id category is existed in productBYCategory
  console.log(
    `productByCategory[action.payload.id]`,
    productByCategory[action.payload.id]
  );
  if (!productByCategory[action.payload.id]) {
    // show loading filter,
    yield put({ type: typeProducts.showLoadingFilterByCategory });
    // select state product and category
    yield put({
      type: typeProducts.filterProductByCategorySuccess,
      payload: {
        productByCategory: {
          ...productByCategory,
          [action.payload.id]: data.filter(
            (product) => product.categoryId == action.payload.id
          ),
        },
      },
    });
  }
}

export const productSagas = [
  takeLatest(typeProducts.queryProduct, queryProductSaga),
  takeLatest(typeProducts.fetchProduct, fetchProductSaga),
  takeLatest(typeProducts.createProduct, createProductSaga),
  takeLatest(typeProducts.removeProduct, removeProductSaga),
  takeLatest(typeProducts.updateProduct, updateProductSaga),
  takeLatest(typeProducts.filterProductByCategory, filterProductByCategorySaga),
  takeLatest(typeProducts.queryProduct, queryProductSaga),
];
