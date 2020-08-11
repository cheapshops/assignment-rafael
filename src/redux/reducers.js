import { combineReducers } from "redux";
import fw from "./fw/reducer";

const appReducer = combineReducers({
  fw,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
