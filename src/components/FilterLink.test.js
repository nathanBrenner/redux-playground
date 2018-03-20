import React from "react";
import FilterLink from "./FilterLink";
import { render } from "react-dom";
import { MemoryRouter } from "react-router";

describe("FilterLink", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });

  test("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <MemoryRouter>
        <FilterLink />
      </MemoryRouter>,
      div
    );
  });
});
