import React from "react";
import Root from "./Root";
import configureStore from "../configureStore";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Root", () => {
  it("renders without crashing", () => {
    const store = configureStore();
    shallow(<Root store={store} />);
  });

  test("snapshot", () => {
    const store = configureStore();
    const component = renderer.create(<Root store={store} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
