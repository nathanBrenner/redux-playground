import React from "react";
import AddTodo from "./AddTodo";
import configureStore from "../configureStore";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("AddTodo", () => {
  test("renders without crashing", () => {
    const store = configureStore();
    shallow(<AddTodo store={store} />);
  });
  test("snapshot", () => {
    const store = configureStore();
    const component = renderer.create(<AddTodo store={store} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
