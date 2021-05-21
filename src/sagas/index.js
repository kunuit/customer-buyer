import { all } from "@redux-saga/core/effects";

import { authSagas } from "./auth.saga";
import { cartSagas } from "./cart.saga";
import { categorySagas } from "./category.saga";
import { favoriteSagas } from "./favorite.saga";
import { productSagas } from "./product.saga";
import { SupplierSagas } from "./supplier.saga";
import { uploadSagas } from "./upload.saga";
import { measureSagas } from "./measure.saga";

function* rootSaga() {
  yield all([
    ...authSagas,
    ...productSagas,
    ...categorySagas,
    ...SupplierSagas,
    ...cartSagas,
    ...favoriteSagas,
    ...uploadSagas,
    ...measureSagas,
  ]);
}

export default rootSaga;
