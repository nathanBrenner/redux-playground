import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import configureStore from "../configureStore";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";

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

  test("snapshot", () => {
    const filter = "all";
    const todos = [{ id: "1", completed: false, text: "do something" }];
    const isFetching = false;
    const fetchTodo = () => true;
    const toggleTodo = () => true;
    const store = configureStore();
    const props = { filter, todos, isFetching, fetchTodo, toggleTodo, store };
    const component = renderer.create(
      <MemoryRouter>
        <VisibleTodoList {...props} />
      </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
