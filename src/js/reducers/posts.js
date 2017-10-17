import * as types from "../actions/types";
import createReducer from "../utils/createReducer";
import _ from "lodash";

let posts_initial = [];

export const posts_list = createReducer(posts_initial, {
  [types.POSTS_REQUEST_SUCCESS](state, action) {
    let newState = _.cloneDeep(action.data);
    return newState;
  }
});
