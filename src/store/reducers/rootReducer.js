import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import state from "./state";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    state,
  });

export default rootReducer;
