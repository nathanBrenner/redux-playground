import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoApp from "./TodoApp";
import registerServiceWorker from "./registerServiceWorker";
import { store } from "./Store";

const render = () => {
  ReactDOM.render(
    <TodoApp todos={store.getState().todos} />,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
registerServiceWorker();
