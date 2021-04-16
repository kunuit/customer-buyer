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
  getFavorite_FiB_API,
  addProductToFavorite_FiB_API,
  removeProductOutFavorite_FiB_API,
} from "../apis/firebase/favorite.firebase";
import { getProductById_Fib_API } from "../apis/firebase/product.firebase";

import { showToast } from "../common/Layout/toast.helper";

export const typeFavorites = {
  // fetch Favorite
  fetchFavoriteFirebase: "FETCH_FAVORITE_FIREBASE",
  fetchFavoriteFirebaseSuccess: "FETCH_FAVORITE_FIREBASE_SUCCESS",
  // loading
  showLoadingFavorite: "SHOW_LOADING_Favorite",
  // active product to favorite
  activeFavoriteProduct: "ACTIVE_FAVORITE_PRODUCT",
  activeFavoriteProductSuccess: "ACTIVE_FAVORITE_PRODUCT_SUCCESS",
  // inactive product at favorite
  inactiveFavoriteProduct: "INACTIVE_FAVORITE_PRODUCT",
  inactiveFavoriteProductSuccess: "INACTIVE_FAVORITE_PRODUCT_SUCCESS",
};

function* fetchFavoriteSaga({ type, payload }) {
  // show loading
  yield put({ type: typeFavorites.showLoadingFavorite });
  // call
  const { code, data } = yield call(getFavorite_FiB_API);
  // handle
  if (code == 200) {
    const transitData = Object.values(data);

    // công việc này của back end
    const realFavorite = yield all(
      transitData.map((item) => {
        return call(getProductById_Fib_API, { id: item.id });
        // console.log(getOneProduct, "check get one Product");
        // return {
        //   data: getOneProduct.data,
        //   isHeart: true,
        // };
        // return getOneProduct
        //   .then((result) => ({
        //     retult: result.data,
        //   }))
        //   .catch((error) => console.log(error, "error in map fetch favorite"));
      })
    );
    yield put({
      type: typeFavorites.fetchFavoriteFirebaseSuccess,
      payload: {
        data: realFavorite,
      },
    });
  } else {
    showToast({ title: "Favorite", type: "error", message: data });
  }
}

function* activeFavoriteProductSaga({ type, payload }) {
  const listFavorite = yield select((state) => state.favorites);
  console.log(listFavorite, "check transitListFavorite");

  if (listFavorite.data.some((item) => item.id == payload.data.id)) return;

  const { code, data } = yield call(addProductToFavorite_FiB_API, {
    id: payload.data.id,
  });

  if (code == 200) {
    yield put({
      type: typeFavorites.activeFavoriteProductSuccess,
      payload: {
        data: payload.data,
      },
    });
  } else {
    showToast({
      title: "Favorites",
      type: "error",
      message: data,
    });
  }
}

function* inactiveFavoriteProductSaga({ type, payload }) {
  const { code, data } = yield call(removeProductOutFavorite_FiB_API, {
    id: payload.data.id,
  });

  if (code == 200) {
    yield put({
      type: typeFavorites.inactiveFavoriteProductSuccess,
      payload: {
        data: payload.data.id,
      },
    });
  } else {
    showToast({
      title: "Favorites",
      type: "error",
      message: data,
    });
  }
}

export const favoriteSagas = [
  takeLatest(typeFavorites.fetchFavoriteFirebase, fetchFavoriteSaga),
  takeLatest(typeFavorites.activeFavoriteProduct, activeFavoriteProductSaga),
  takeLatest(
    typeFavorites.inactiveFavoriteProduct,
    inactiveFavoriteProductSaga
  ),
];
