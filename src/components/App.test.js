import React from "react";
import App from "./App";
import configureStore from "../configureStore";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";

describe("App", () => {
  test("renders without crashing", () => {
    const store = configureStore();
    shallow(<App store={store} />);
  });

  test("snapshot", () => {
    const store = configureStore();
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
