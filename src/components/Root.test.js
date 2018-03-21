import React from "react";
import Root from "./Root";
import configureStore from "../configureStore";
import { shallow } from "enzyme";

describe("Root", () => {
  it("renders without crashing", () => {
    const store = configureStore();
    shallow(<Root store={store} />);
  });
});
