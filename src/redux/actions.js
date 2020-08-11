import { createAction } from "redux-actions";
import constants from "./constants";

export const fwRequest = createAction(constants.FW_REQUEST);
export const fwSuccess = createAction(constants.FW_SUCCESS);
export const fwFailed = createAction(constants.FW_FAILED);
