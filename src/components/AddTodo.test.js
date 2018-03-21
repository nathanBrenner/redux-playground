import React from "react";
import AddTodo from "./AddTodo";
import configureStore from "../configureStore";
import { shallow } from "enzyme";

describe("AddTodo", () => {
  test("renders without crashing", () => {
    const store = configureStore();
    shallow(<AddTodo store={store} />);
  });
});
