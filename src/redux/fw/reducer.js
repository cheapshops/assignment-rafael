import { handleActions } from "redux-actions";
import update from "immutability-helper";
import constants from "../constants";

let initialState = {
  isLoading: false,
  isSuccess: false,
  isFailed: false,
  message: "",
  data: {},
};

const fwRequest = (state, action) => {
  return update(state, {
    isLoading: { $set: true },
    isSuccess: { $set: false },
    isFailed: { $set: false },
    message: { $set: "" },
    data: { $set: {} },
  });
};

const fwSuccess = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: true },
    isFailed: { $set: false },
    message: { $set: "Success!!" },
    data: { $set: action.payload },
  });
};

const fwFailed = (state, action) => {
  return update(state, {
    isLoading: { $set: false },
    isSuccess: { $set: false },
    isFailed: { $set: true },
    message: { $set: "Failed!!" },
    data: { $set: action.payload },
  });
};

export default handleActions(
  {
    [constants.FW_REQUEST]: fwRequest,
    [constants.FW_SUCCESS]: fwSuccess,
    [constants.FW_FAILED]: fwFailed,
  },
  initialState
);
