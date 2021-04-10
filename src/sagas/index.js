import { all } from "@redux-saga/core/effects";

import { authSagas } from "./auth.saga";
import { categorySagas } from "./category.saga";
import { productSagas } from "./product.saga";

function* rootSaga() {
  yield all([...authSagas, ...productSagas, ...categorySagas]);
}

export default rootSaga;
