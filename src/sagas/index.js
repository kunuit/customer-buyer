import { all } from "@redux-saga/core/effects";

import { authSagas } from "./auth.saga";
import { productSagas } from "./product.saga";

function* rootSaga() {
  yield all([...authSagas, ...productSagas]);
}

export default rootSaga;
