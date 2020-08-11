import * as actions from "../actions";
import { call, put } from "redux-saga/effects";
import { fireApi } from "../../services";

export function* fwRequest(action) {
  const header = {};
  try {
    const response = yield call(
      fireApi,
      "POST",
      `/frameworks`,
      action.payload,
      header
    );
    if (response) {
      yield put(actions.fwSuccess(response.data));
    }
  } catch (e) {
    console.log(e);
    yield put(actions.fwFailed(e.response.data));
  }
}
