import React from "react";
import FetchError from "./FetchError";
import { render } from "react-dom";

describe("FetchError", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });
  test("renders without crashing", () => {
    const div = document.createElement("div");
    render(<FetchError />, div);
  });
});
