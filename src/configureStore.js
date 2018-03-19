import todoApp from "./reducers";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import { createLogger } from "redux-logger";

const configureStore = () => {
  const middlewares = [promise];

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
