import React from "react";
import TodoList from "./TodoList";
import { shallow } from "enzyme";

describe("TodoList", () => {
  test("renders without crashing", () => {
    const todos = [{ id: "1", completed: false, text: "do something" }];
    const onTodoClick = () => true;
    const props = { todos, onTodoClick };

    shallow(<TodoList {...props} />);
  });
});
