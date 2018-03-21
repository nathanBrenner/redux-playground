import React from "react";
import Todo from "./Todo";
import { shallow } from "enzyme";

describe("Todo", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });

  test("renders without crashing", () => {
    const onClick = () => true;
    const completed = false;
    const text = "do something";
    const props = { onClick, completed, text };
    shallow(<Todo {...props} />);
  });
});
