import { normalize } from "normalizr";
import * as schema from "./schema";
import * as api from "../api";
import { getIsFetching } from "../reducers";
import types from "../constants";

/**
 * thunk: a function that returns a function, instead of an action
 * here a thunk calls an api request that will return a promise
 * on resolve, dispatch action (which updates the state)
 *
 * es6 thunk
 * const action = payload => dispatch => api.req(payload).then(res => dispatch({ type: "a", res }));
 *
 * es6 thunk
 * function action(payload) {
 *  return function(dispatch) {
 *    return api.req(payload).then(function(res) {
 *      dispatch({ type: "a", res });
 *    });
 *  };
 * }
 */

export const addTodo = text => dispatch =>
  api.addTodo(text).then(response => {
    dispatch({
      type: types.ADD_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    });
  });

export const toggleTodo = id => dispatch =>
  api.toggleTodo(id).then(response => {
    dispatch({
      type: types.TOGGLE_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    });
  });

export const fetchTodos = filter => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve();
  }

  dispatch({
    type: types.FETCH_TODOS_REQUEST,
    filter
  });

  return api.fetchTodos(filter).then(
    response => {
      dispatch({
        type: types.FETCH_TODOS_SUCCESS,
        filter,
        response: normalize(response, schema.arrayOfTodos)
      });
    },
    error => {
      dispatch({
        type: types.FETCH_TODOS_FAILURE,
        filter,
        message: error.message || "Something went wrong"
      });
    }
  );
};
