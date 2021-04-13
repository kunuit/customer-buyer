import { all } from "@redux-saga/core/effects";

import { authSagas } from "./auth.saga";
import { cartSagas } from "./cart.saga";
import { categorySagas } from "./category.saga";
import { productSagas } from "./product.saga";
import { SupplierSagas } from "./supplier.saga";

function* rootSaga() {
  yield all([
    ...authSagas,
    ...productSagas,
    ...categorySagas,
    ...SupplierSagas,
    ...cartSagas,
  ]);
}

export default rootSaga;
