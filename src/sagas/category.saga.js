import { ThemeProvider } from "@react-navigation/native";
import { put, takeLatest, call } from "@redux-saga/core/effects";
import { getCategoriesAPI } from "../apis/category.api";
import { getAllCategory_FiB_API } from "../apis/firebase/category.firebase";
import { getProductsAPI } from "../apis/product.api";
import { showToast } from "../common/Layout/toast.helper";
import { typeProducts } from "./product.saga";

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
  const { code, error, message, payload } = yield call(getCategoriesAPI);
  if (!error) {
    yield put({
      type: typeCategories.fetchCategorySuccess,
      payload: {
        data: payload,
      },
    });
    yield put({
      type: typeProducts.fetchProductByCategory,
    });
  } else {
    showToast({ title: "Category", type: "error", message: message });
  }
}

export const categorySagas = [
  takeLatest(typeCategories.fetchCategory, fetchCategorySaga),
];
