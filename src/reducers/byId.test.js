import byId, { getTodo } from "./byId";

describe("byId", () => {
  test("returns default state", () => {
    expect(byId(undefined, { type: "FOO" })).toEqual({});
  });
  it("returns state with todos indexed by Id", () => {
    const todos = {
      "d3aa75e9-b7ac-46be-a735-d7adc71d1969": {
        id: "d3aa75e9-b7ac-46be-a735-d7adc71d1969",
        text: "hey",
        completed: true
      }
    };
    const action = {
      type: "FETCH_TODOS_SUCCESS",
      response: {
        entities: {
          todos
        }
      }
    };

    expect(byId(undefined, action)).toEqual(todos);
  });

  test("getTodo", () => {
    const todo = {
      id: "d3aa75e9-b7ac-46be-a735-d7adc71d1969",
      text: "hey",
      completed: true
    };
    const state = {
      "d3aa75e9-b7ac-46be-a735-d7adc71d1969": todo
    };
    expect(getTodo(state, "d3aa75e9-b7ac-46be-a735-d7adc71d1969")).toEqual(
      todo
    );
  });
});
