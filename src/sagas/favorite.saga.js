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
  const { token } = yield select((state) => state.auth);
  // call
  const { error, message, code, payload } = yield call(
    getFavoriteProducts,
    token
  );
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
  // get token
  const { token } = yield select((state) => state.auth);
  // call
  console.log(`action.payload.productId`, action.payload.productId);
  const { error, message, code, payload } = yield call(
    activeProdctToFavorite,
    { productId: action.payload.productId },
    token
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
  } else {
    console.log(`payload of favorite`, payload);
    // select favoriteProducts to splice
    const { favoriteProducts } = yield select((state) => state.favorites);
    //! wait kong populate product for me
    yield put({
      type: typeFavorites.fetchFavoriteSuccess,
      payload: {
        newFavoriteProducts: [...favoriteProducts],
      },
    });
  }
}

function* inactiveFavoriteProductSaga(action) {
  // get token
  const { token } = yield select((state) => state.auth);
  console.log(`action.payload.productId`, action.payload.productId);
  // call
  const { error, message, code, payload } = yield call(
    inactiveProductToFavorite,
    {
      productId: action.payload.productId,
    },
    token
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
  } else {
    // select favoriteProducts to splice
    const { favoriteProducts } = yield select((state) => state.favorites);

    const indexProductInFavorite = favoriteProducts.findIndex(
      (product) => product.productId == action.payload.productId
    );

    console.log(`indexProductInFavorite`, indexProductInFavorite);

    favoriteProducts.splice(indexProductInFavorite, 1);
    //! splice la no tu xoa lun ben reducer
    yield put({
      type: typeFavorites.fetchFavoriteSuccess,
      payload: {
        newFavoriteProducts: favoriteProducts,
      },
    });
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
