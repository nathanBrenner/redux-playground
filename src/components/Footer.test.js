import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";

describe("Footer", () => {
  test("renders without crashing", () => {
    shallow(<Footer />);
  });
});
