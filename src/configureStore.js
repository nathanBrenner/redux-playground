import todoApp from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

const configureStore = () => {
  const middlewares = [thunk];

  // if (process.env.NODE_ENV !== "production") {
  //   middlewares.push(createLogger());
  // }

  const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
  );

  return store;
};

export default configureStore;
