import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import {
  createSupplier_FiB_API,
  getAllSupplier_FiB_API,
  querySupplier_FiB_API,
  removeSupplier_FiB_API,
  updateSupplier_FiB_API,
} from "../apis/firebase/supplier.firebase";

import { showToast } from "../common/Layout/toast.helper";

export const typeSuppliers = {
  // get Supplier
  fetchSupplierFirebase: "FETCH_Supplier_FIREBASE",
  fetchSupplierFirebaseSuccess: "FETCH_Supplier_FIREBASE_SUCCESS",
  fetchSupplierFirebaseFail: "FETCH_Supplier_FIREBASE_FAIL",
  // loading
  showLoadingSupplier: "SHOW_LOADING_Supplier",
  showLoadingCreateSupplier: "SHOW_LOADING_CREATE_Supplier",
  hiddenLoadingSupplier: "HIDDEN_LOADING_Supplier",
  // create Supplier
  createSupplierFirebase: "CREATE_Supplier_FIREBASE",
  createSupplierFirebaseSuccess: "CREATE_Supplier_FIREBASE_SUCCESS",
  createSupplierFirebaseFail: "CREATE_Supplier_FIREBASE_FAIL",
  // reset form create Supplier
  resetCreateSupplier: "RESET_CREATE_Supplier",
  // update Supplier
  updateSupplierFirebase: "UPDATE_Supplier_FIREBASE",
  updateSupplierFirebaseSuccess: "UPDATE_Supplier_FIREBASE_SUCCESS",
  updateSupplierFirebaseFail: "UPDATE_Supplier_FIREBASE_FAIL",
  // remove Supplier
  removeSupplierFirebase: "REMOVE_Supplier_FIREBASE",
  removeSupplierFirebaseSuccess: "REMOVE_Supplier_FIREBASE_SUCCESS",
  removeSupplierFirebaseFail: "REMOVE_Supplier_FIREBASE_FAIL",
  // query Supplier
  querySupplierFirebase: "QUERY_Supplier_FIREBASE",
  querySupplierFirebaseSuccess: "QUERY_Supplier_FIREBASE_SUCCESS",
};

function* fetchSupplierSaga() {
  yield put({ type: typeSuppliers.showLoadingSupplier });

  const { code, data } = yield call(getAllSupplier_FiB_API);
  const transitData = Object.values(data);
  if (code == 200) {
    yield put({
      type: typeSuppliers.fetchSupplierFirebaseSuccess,
      payload: {
        data: transitData,
      },
    });
  } else {
    showToast({ title: Supplier, type: "error", message: data });
  }
}

function* createSupplierSaga({ type, payload }) {
  console.log(payload.data, "check data in saga");
  const { code, data } = yield call(createSupplier_FiB_API, payload.data);
  if (code == 200) {
    yield put({
      type: typeSuppliers.createSupplierFirebaseSuccess,
      payload: {
        data: payload.data,
      },
    });
  } else {
    showToast({ title: Supplier, type: "error", message: data });
  }
}

function* updateProructSaga({ type, payload }) {
  console.log(payload, "check update");
  const { code, data } = yield call(updateSupplier_FiB_API, payload.data);
  if (code == 200) {
    yield put({
      type: typeSuppliers.updateSupplierFirebaseSuccess,
      payload: {
        data: payload.data,
      },
    });
  } else {
    showToast({ title: Supplier, type: "error", message: data });
  }
}

function* removeSupplierSaga({ type, payload }) {
  const { code, data } = yield call(removeSupplier_FiB_API, payload.index);
  if (code == 200) {
    yield put({
      type: typeSuppliers.removeSupplierFirebaseSuccess,
      payload: {
        data: payload.index,
      },
    });
  } else {
    showToast({ title: Supplier, type: "error", message: data });
  }
}

function* querySupplierSaga({ type, payload }) {
  yield put({ type: typeSuppliers.showLoadingSupplier });
  yield delay(300);

  const queryRes = yield call(querySupplier_FiB_API, payload.data);
}

export const SupplierSagas = [
  // takeEvery("FETCH_SupplierS", fetchAllSuppliers),
  takeLatest(typeSuppliers.fetchSupplierFirebase, fetchSupplierSaga),
  takeLatest(typeSuppliers.createSupplierFirebase, createSupplierSaga),
  takeLatest(typeSuppliers.updateSupplierFirebase, updateProructSaga),
  takeLatest(typeSuppliers.removeSupplierFirebase, removeSupplierSaga),
  takeLatest(typeSuppliers.querySupplierFirebase, querySupplierSaga),
];
