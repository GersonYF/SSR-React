import Api from "../utils/api";
import APIRoutes from "../utils/apiRoutes";
import * as types from "./types";

export function getPosts(token) {
  return (dispatch, getState) => {
    dispatch({ type: types.POSTS_REQUEST });
    return Api.get(APIRoutes.posts, {}, token)
      .then(resp => {
        dispatch(postsSuccess({ data: resp }));
      })
      .catch(ex => {
        let resp = {
          status: "Error",
          msg: "Error"
        };
        dispatch(postsFail({ status: resp }));
      });
  };
}

export function postsSuccess({ data }) {
  return {
    type: types.POSTS_REQUEST_SUCCESS,
    data
  };
}

export function postsFail({ status }) {
  return {
    type: types.POSTS_REQUEST_FAILURE,
    status
  };
}
