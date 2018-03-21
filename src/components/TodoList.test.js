import React from "react";
import TodoList from "./TodoList";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("TodoList", () => {
  test("renders without crashing", () => {
    const todos = [{ id: "1", completed: false, text: "do something" }];
    const onTodoClick = () => true;
    const props = { todos, onTodoClick };

    shallow(<TodoList {...props} />);
  });

  test("snapshot", () => {
    const todos = [{ id: "1", completed: false, text: "do something" }];
    const onTodoClick = () => true;
    const props = { todos, onTodoClick };
    const component = renderer.create(<TodoList {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
