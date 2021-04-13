import { put, takeLatest, call } from "@redux-saga/core/effects";
import { getAllCategory_FiB_API } from "../apis/firebase/category.firebase";
import { showToast } from "../common/Layout/toast.helper";

export const typeCategories = {
  //get categories
  fetchCategoryFirebase: "FETCH_CATEGORY_FIREBASE",
  fetchCategoryFirebaseSuccess: "FETCH_CATEGORY_FIREBASE_SUCCESS",
  fetchCategoryFirebaseFail: "FETCH_CATEGORY_FIREBASE_FAIL",
  // loading
  showLoadingCategory: "SHOW_LOADING_CATEGORY",
  hiddenLoadingCategory: "HIDDEN_LOADING_CATEGORY",
};

function* fetchCategorySaga() {
  yield put({ type: typeCategories.showLoadingCategory });

  const { code, data } = yield call(getAllCategory_FiB_API);
  if (code == 200) {
    yield put({
      type: typeCategories.fetchCategoryFirebaseSuccess,
      payload: {
        data,
      },
    });
  } else {
    showToast({ title: "Product", type: "error", message: data });
  }
}

export const categorySagas = [
  takeLatest(typeCategories.fetchCategoryFirebase, fetchCategorySaga),
];
