import React from "react";
import FetchError from "./FetchError";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("FetchError", () => {
  test("renders without crashing", () => {
    shallow(<FetchError />);
  });

  test("snapshot", () => {
    const component = renderer.create(<FetchError />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
