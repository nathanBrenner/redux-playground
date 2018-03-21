import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import configureStore from "../configureStore";
import { shallow } from "enzyme";

describe("VisibleTodoList", () => {
  test("renders without crashing", () => {
    const filter = "all";
    const todos = [{ id: "1", completed: false, text: "do something" }];
    const isFetching = false;
    const fetchTodo = () => true;
    const toggleTodo = () => true;
    const store = configureStore();
    const props = { filter, todos, isFetching, fetchTodo, toggleTodo, store };
    shallow(<VisibleTodoList {...props} />);
  });
});
