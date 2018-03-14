import React, { Component } from "react";
import { store, Actions } from "./Store";

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            store.dispatch({
              type: Actions.ADD_TODO,
              text: "Test",
              id: nextTodoId++
            });
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
