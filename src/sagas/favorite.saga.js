import {
  all,
  call,
  fork,
  put,
  select,
  takeEvery,
  takeLatest,
} from "@redux-saga/core/effects";
import {
  activeProdctToFavorite,
  getFavoriteProducts,
  inactiveProductToFavorite,
} from "../apis/favorite.api";
import {
  getFavorite_FiB_API,
  addProductToFavorite_FiB_API,
  removeProductOutFavorite_FiB_API,
} from "../apis/firebase/favorite.firebase";
import { getProductById_Fib_API } from "../apis/firebase/product.firebase";

import { showToast } from "../common/Layout/toast.helper";
import { requireLoginSaga } from "./utilSagas.saga";

export const typeFavorites = {
  // fetch Favorite
  fetchFavorite: "FETCH_FAVORITE",
  fetchFavoriteSuccess: "FETCH_FAVORITE_SUCCESS",
  // loading
  showLoadingFavorite: "SHOW_LOADING_FAVORITE",
  // active product to favorite
  activeFavoriteProduct: "ACTIVE_FAVORITE_PRODUCT",
  activeFavoriteProductSuccess: "ACTIVE_FAVORITE_PRODUCT_SUCCESS",
  // inactive product at favorite
  inactiveFavoriteProduct: "INACTIVE_FAVORITE_PRODUCT",
  inactiveFavoriteProductSuccess: "INACTIVE_FAVORITE_PRODUCT_SUCCESS",
};

function* fetchFavoriteSaga(action) {
  // show loading
  yield put({ type: typeFavorites.showLoadingFavorite });
  // get token
  const isToken = yield call(requireLoginSaga);
  console.log(`isToken`, isToken);
  if (!isToken) return;
  // call
  const { error, message, code, payload } = yield call(getFavoriteProducts);
  // handle
  if (error) {
    showToast({ title: "Favorite", type: "error", message });
  } else {
    console.log(`payload of favorite`, payload);
    yield put({
      type: typeFavorites.fetchFavoriteSuccess,
      payload: {
        newFavoriteProducts: payload,
      },
    });
  }
}

function* activeFavoriteProductSaga(action) {
  // check token
  const isToken = yield call(requireLoginSaga);
  console.log(`isToken`, isToken);
  if (!isToken) return;
  // call
  console.log(`action.payload.productId`, action.payload.productId);
  const { error, message, code, payload } = yield call(activeProdctToFavorite, {
    productId: action.payload.productId,
  });
  console.log(`{ error, message, code, payload }`, {
    error,
    message,
    code,
    payload,
  });
  // handle
  if (error) {
    showToast({ title: "Favorite", type: "error", message });
  }
}

function* inactiveFavoriteProductSaga(action) {
  // check token
  const isToken = yield call(requireLoginSaga);
  console.log(`isToken`, isToken);
  if (!isToken) return;
  // call
  const { error, message, code, payload } = yield call(
    inactiveProductToFavorite,
    {
      productId: action.payload.productId,
    }
  );

  console.log(`{ error, message, code, payload }`, {
    error,
    message,
    code,
    payload,
  });

  // handle
  if (error) {
    showToast({ title: "Favorite", type: "error", message });
  }
}

export const favoriteSagas = [
  takeLatest(typeFavorites.fetchFavorite, fetchFavoriteSaga),
  takeLatest(typeFavorites.activeFavoriteProduct, activeFavoriteProductSaga),
  takeLatest(
    typeFavorites.inactiveFavoriteProduct,
    inactiveFavoriteProductSaga
  ),
];
