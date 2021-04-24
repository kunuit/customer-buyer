import { ThemeProvider } from "@react-navigation/native";
import { put, takeLatest, call } from "@redux-saga/core/effects";
import { getCategoriesAPI } from "../apis/category.api";
import { getAllCategory_FiB_API } from "../apis/firebase/category.firebase";
import { getProductsAPI } from "../apis/product.api";
import { showToast } from "../common/Layout/toast.helper";

export const typeCategories = {
  //get categories from firebase
  fetchCategoryFirebase: "FETCH_CATEGORY_FIREBASE",
  fetchCategoryFirebaseSuccess: "FETCH_CATEGORY_FIREBASE_SUCCESS",
  fetchCategoryFirebaseFail: "FETCH_CATEGORY_FIREBASE_FAIL",
  // loading
  showLoadingCategory: "SHOW_LOADING_CATEGORY",
  hiddenLoadingCategory: "HIDDEN_LOADING_CATEGORY",
  // get categories
  fetchCategory: "FETCH_CATEGORY",
  fetchCategorySuccess: "FETCH_CATEGORY_SUCCESS",
};

function* fetchCategoryFirebaseSaga() {
  yield put({ type: typeCategories.showLoadingCategory });

  const { code, data } = yield call(getAllCategory_FiB_API);
  const transitData = Object.values(data);
  if (code == 200) {
    yield put({
      type: typeCategories.fetchCategoryFirebaseSuccess,
      payload: {
        data: transitData,
      },
    });
  } else {
    showToast({ title: "Product", type: "error", message: data });
  }
}

function* fetchCategorySaga(action) {
  // show loading
  yield put({ type: typeCategories.showLoadingCategory });
  // call API
  const categoryRes = yield call(getCategoriesAPI);
  const { code, error, message, payload } = categoryRes.data;
  if (!error) {
    yield put({
      type: typeCategories.fetchCategorySuccess,
      payload: {
        data: payload,
      },
    });
  } else {
    showToast({ title: "Category", type: "error", message: message });
  }
}

export const categorySagas = [
  takeLatest(typeCategories.fetchCategoryFirebase, fetchCategoryFirebaseSaga),
  takeLatest(typeCategories.fetchCategory, fetchCategorySaga),
];
