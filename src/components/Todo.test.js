import React from "react";
import Todo from "./Todo";
import { render } from "react-dom";

describe("Todo", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });

  test("renders without crashing", () => {
    const onClick = () => true;
    const completed = false;
    const text = "do something";
    const props = { onClick, completed, text };
    const div = document.createElement("div");
    render(<Todo {...props} />, div);
  });
});
