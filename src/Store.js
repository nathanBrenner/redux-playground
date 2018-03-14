import { createStore, combineReducers } from "redux";

export const Actions = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};

export const Filters = {
  ALL: "SHOW_ALL",
  ACTIVE: "SHOW_ACTIVE",
  COMPLETED: "SHOW_COMPLETED"
};

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case "TOGGLE_TODO":
      if (state.id !== action.id) {
        return todo;
      }
      return { ...state, completed: !state.completed };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...state, todo(undefined, action)];
    case Actions.TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = Filters.ALL, action) => {
  switch (action.type) {
    case Actions.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// example implementation on Redux combineReducers
// const combineReducers = reducers => {
//   return (state = {}, action) => {
//     return Object.keys(reducers).reduce((nextState, key) => {
//       nextState[key] = reducers[key](state[key], action);
//       return nextState;
//     }, {});
//   };
// };

export const store = createStore(todoApp);
