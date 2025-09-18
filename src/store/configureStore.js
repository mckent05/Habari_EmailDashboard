import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import authReducer from "./auth/authSlice";
import emailReducer from "./emails/emailSlice"
import userReducer from "./user/userSlice"


const reducer = combineReducers({
  auth: authReducer,
  emails: emailReducer,
  user: userReducer
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
