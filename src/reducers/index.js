import { combineReducers } from "redux";

import authReducers from "./authReducers";
import itemReducer from "./itemReducer";

export default combineReducers({
  auth: authReducers,
  item: itemReducer,
});
