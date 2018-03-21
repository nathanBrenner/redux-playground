import React from "react";
import FetchError from "./FetchError";
import { shallow } from "enzyme";

describe("FetchError", () => {
  test("renders without crashing", () => {
    shallow(<FetchError />);
  });
});
