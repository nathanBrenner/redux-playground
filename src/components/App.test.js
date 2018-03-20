import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import configureStore from "../configureStore";

describe("App", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });

  xtest("it renders without crashing", () => {
    const div = document.createElement("div");
    const store = configureStore();
    ReactDOM.render(<App store={store} />, div);
  });
});
