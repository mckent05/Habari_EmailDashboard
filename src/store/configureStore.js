import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import authReducer from "./auth/authSlice";


const reducer = combineReducers({
  auth: authReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
