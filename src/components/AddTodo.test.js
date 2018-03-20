import React from "react";
import AddTodo from "./AddTodo";
import renderer from "react-test-renderer";
import { connect } from "react-redux";
import { render } from "react-dom";
import configureStore from "../configureStore";

describe("AddTodo", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });
  test("renders without crashing", () => {
    const div = document.createElement("div");
    const store = configureStore();
    render(<AddTodo store={store} />, div);
  });
  xtest("snapshot", () => {
    const dispatchMock = () => true;
    const addTodo = new AddTodo({ dispatch: dispatchMock });
    const component = renderer.create(connect()(addTodo));
  });
});
