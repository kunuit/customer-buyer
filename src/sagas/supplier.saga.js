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
import { getSuppliersAPI } from "../apis/supplier.api";

import { showToast } from "../common/Layout/toast.helper";
import { statusFetch } from "./utilSagas.saga";

export const typeSuppliers = {
  // get Supplier
  fetchSupplier: "FETCH_SUPPLIER",
  fetchSupplierSuccess: "FETCH_SUPPLIER_SUCCESS",
  // loading
  showLoadingSupplier: "SHOW_LOADING_SUPPLIER",
  showLoadingCreateSupplier: "SHOW_LOADING_CREATE_SUPPLIER",
  showLoadingFetchAddSupplier: "SHOW_LOADING_FETCH_ADD_SUPPLIER",
  hiddenLoadingSupplier: "HIDDEN_LOADING_SUPPLIER",
  // reset form create Supplier
  resetCreateSupplier: "RESET_CREATE_SUPPLIER",
};

function* fetchSupplierSaga(action) {
  // show loading
  yield put({
    type:
      action.payload.status == statusFetch.load
        ? typeSuppliers.showLoadingSupplier
        : typeSuppliers.showLoadingFetchAddSupplier,
  });
  // select
  const { supplierPagination, data } = yield select((state) => state.suppliers);
  const { token } = yield select((state) => state.auth);
  // call API
  const { payload, code, error, message, pagination } = yield call(
    getSuppliersAPI,
    action.payload.status == statusFetch.load
      ? 1
      : supplierPagination.currentPage + 1,
    token
  );

  if (error) {
    showToast({ title: "Supplier", type: "error", message });
  } else {
    console.log(payload, pagination, "check payload supplier");
    yield put({
      type: typeSuppliers.fetchSupplierSuccess,
      payload: {
        data:
          action.payload.status == statusFetch.loadMore
            ? [...data, ...payload]
            : payload,
        pagination,
      },
    });
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
  takeLatest(typeSuppliers.fetchSupplier, fetchSupplierSaga),
  // takeLatest(typeSuppliers.createSupplierFirebase, createSupplierSaga),
  // takeLatest(typeSuppliers.updateSupplierFirebase, updateProructSaga),
  // takeLatest(typeSuppliers.removeSupplierFirebase, removeSupplierSaga),
  // takeLatest(typeSuppliers.querySupplierFirebase, querySupplierSaga),
];
