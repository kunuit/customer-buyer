import { ThemeProvider } from "@react-navigation/native";
import { put, takeLatest, call } from "@redux-saga/core/effects";
import { getCategoriesAPI } from "../apis/category.api";
import { getAllCategory_FiB_API } from "../apis/firebase/category.firebase";
import { getProductsAPI } from "../apis/product.api";
import { showToast } from "../common/Layout/toast.helper";

export const typeCategories = {
  // loading
  showLoadingCategory: "SHOW_LOADING_CATEGORY",
  hiddenLoadingCategory: "HIDDEN_LOADING_CATEGORY",
  // get categories
  fetchCategory: "FETCH_CATEGORY",
  fetchCategorySuccess: "FETCH_CATEGORY_SUCCESS",
};

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
  takeLatest(typeCategories.fetchCategory, fetchCategorySaga),
];
