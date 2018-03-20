import React from "react";
import Footer from "./Footer";
import { render } from "react-dom";
import { MemoryRouter } from "react-router";

describe("Footer", () => {
  test("true should be true", () => {
    expect(true).toBe(true);
  });

  test("renders without crashing", () => {
    const div = document.createElement("div");
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
      div
    );
  });
});
