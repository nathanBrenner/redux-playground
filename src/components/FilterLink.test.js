import React from "react";
import FilterLink from "./FilterLink";
import { shallow } from "enzyme";

describe("FilterLink", () => {
  test("renders without crashing", () => {
    shallow(<FilterLink />);
  });
});
