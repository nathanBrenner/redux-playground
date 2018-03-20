import React from "react";
import Root from "./Root";
import { render } from "react-dom";
import configureStore from "../configureStore";

describe("Root", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    const store = configureStore();
    render(<Root store={store} />, div);
  });
});
