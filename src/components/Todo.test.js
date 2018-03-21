import React from "react";
import Todo from "./Todo";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Todo", () => {
  test("renders without crashing", () => {
    const onClick = () => true;
    const completed = false;
    const text = "do something";
    const props = { onClick, completed, text };
    shallow(<Todo {...props} />);
  });

  test("snapshot", () => {
    const onClick = () => true;
    const completed = false;
    const text = "do something";
    const props = { onClick, completed, text };
    const component = renderer.create(<Todo {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
