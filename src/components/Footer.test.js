import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router";

describe("Footer", () => {
  test("renders without crashing", () => {
    shallow(<Footer />);
  });

  test("snapshot", () => {
    const component = renderer.create(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
