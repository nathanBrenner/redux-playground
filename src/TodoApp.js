import React, { Component } from "react";
import { store, Actions, Filters } from "./Store";
import "./App.css";
import FilterLink from "./FilterLink";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filters.ALL:
      return todos;
    case Filters.COMPLETED:
      return todos.filter(t => t.completed);
    case Filters.ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

let nextTodoId = 0;
class TodoApp extends Component {
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);

    return (
      <div className="container">
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
          {visibleTodos.map(todo => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              onClick={() => {
                store.dispatch({
                  type: Actions.TOGGLE_TODO,
                  id: todo.id
                });
              }}
            >
              {todo.text}
            </li>
          ))}
        </ul>
        <p>
          Show: <FilterLink filter={Filters.ALL}>All</FilterLink>{" "}
          <FilterLink filter={Filters.ACTIVE}>Active</FilterLink>{" "}
          <FilterLink filter={Filters.COMPLETED}>Completed</FilterLink>
        </p>
      </div>
    );
  }
}

export default TodoApp;
