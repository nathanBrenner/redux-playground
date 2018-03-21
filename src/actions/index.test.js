import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./index";
import types from "../constants";
import fetchMock from "fetch-mock";
import * as api from "../api";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test("#addTodo", () => {
    const list = { ids: [], isFetching: false, errorMessage: null };

    const expectedActions = [
      { type: "FETCH_TODOS_REQUEST", filter: "all" },
      {
        type: types.FETCH_TODOS_SUCCESS,
        filter: "all",
        response: {
          entities: {
            todos: {
              "d3aa75e9-b7ac-46be-a735-d7adc71d1969": {
                id: "d3aa75e9-b7ac-46be-a735-d7adc71d1969",
                text: "hey",
                completed: true
              },
              "128b0ed6-33dd-43bb-8f78-d62eb2aba167": {
                id: "128b0ed6-33dd-43bb-8f78-d62eb2aba167",
                text: "ho",
                completed: true
              },
              "316f368a-e57b-4573-ab7a-6b8981e7cc97": {
                id: "316f368a-e57b-4573-ab7a-6b8981e7cc97",
                text: "let’s go",
                completed: false
              }
            }
          },
          result: [
            "d3aa75e9-b7ac-46be-a735-d7adc71d1969",
            "128b0ed6-33dd-43bb-8f78-d62eb2aba167",
            "316f368a-e57b-4573-ab7a-6b8981e7cc97"
          ]
        }
      }
    ];
    const store = mockStore({
      byId: {},
      listByFilter: { all: list, active: list, completed: list }
    });

    return store.dispatch(actions.fetchTodos("all")).then(() => {
      const actions = store.getActions();
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
