import React from "react";
import TodoList from "./TodoList";
import { render } from "react-dom";

describe("TodoList", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });

  test("renders without crashing", () => {
    const todos = [{ id: "1", completed: false, text: "do something" }];
    const onTodoClick = () => true;
    const props = { todos, onTodoClick };

    const div = document.createElement("div");
    render(<TodoList {...props} />, div);
  });
});
