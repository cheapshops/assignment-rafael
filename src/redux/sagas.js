import constants from "./constants";
import { takeLatest, all } from "redux-saga/effects";

import { fwRequest } from "./fw/action";

function* watchActions() {
  yield takeLatest(constants.FW_REQUEST, fwRequest);
}

export default function* rootSaga() {
  yield all([watchActions()]);
}
