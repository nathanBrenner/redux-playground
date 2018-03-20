import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import { render } from "react-dom";
import { MemoryRouter } from "react-router";
import configureStore from "../configureStore";

describe("VisibleTodoList", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });

  test("renders without crashing", () => {
    const filter = "all";
    const todos = [{ id: "1", completed: false, text: "do something" }];
    const isFetching = false;
    const fetchTodo = () => true;
    const toggleTodo = () => true;
    const store = configureStore();
    const props = { filter, todos, isFetching, fetchTodo, toggleTodo, store };
    const div = document.createElement("div");
    render(
      <MemoryRouter>
        <VisibleTodoList {...props} />
      </MemoryRouter>,
      div
    );
  });
});
