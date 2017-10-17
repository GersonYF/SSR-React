import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import reducer from "../reducers/";

const __DEV__ = true;

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

export const configureStore = initialState => {
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));
  return createStore(reducer, initialState, enhancer);
};
