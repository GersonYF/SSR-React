import * as types from "../actions/types";
import createReducer from "../utils/createReducer";
import { List, Map, fromJS } from "immutable";

let posts_initial = List([]);

export const posts_list = createReducer(posts_initial, {
  [types.POSTS_REQUEST_SUCCESS](state, action) {
    return fromJS(action.data);
  }
});
