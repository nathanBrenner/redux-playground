import todoApp from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const thunk = store => next => action =>
  typeof action === "function" ? action(store.dispatch) : next(action);

const configureStore = () => {
  const middlewares = [thunk];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );
  //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  return store;
};

export default configureStore;
