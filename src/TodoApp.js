import React, { Component } from "react";
import { store, Actions } from "./Store";
import "./App.css";

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    return (
      <div class="container">
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            store.dispatch({
              type: Actions.ADD_TODO,
              text: this.input.value,
              id: nextTodoId++
            });
            this.input.value = "";
          }}
        >
          Add Todo
        </button>
        <ul>
          {this.props.todos.map(todo => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              onClick={() => {
                store.dispatch({
                  type: Actions.TOGGLE_TODO,
                  id: todo.id,
                  text: todo.text,
                  completed: todo.completed
                });
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoApp;
