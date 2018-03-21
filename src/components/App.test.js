import React from "react";
import App from "./App";
import configureStore from "../configureStore";
import { shallow } from "enzyme";

describe("App", () => {
  test("renders without crashing", () => {
    const store = configureStore();
    shallow(<App store={store} />);
  });
});
