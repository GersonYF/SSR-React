import { combineReducers } from "redux";
import * as postsReducer from "./posts";

export default combineReducers(Object.assign(postsReducer));
