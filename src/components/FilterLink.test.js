import React from "react";
import FilterLink from "./FilterLink";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";

describe("FilterLink", () => {
  test("renders without crashing", () => {
    shallow(<FilterLink />);
  });

  test("snapshot", () => {
    const component = renderer.create(
      <MemoryRouter>
        <FilterLink filter="all" children="all" />
      </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
