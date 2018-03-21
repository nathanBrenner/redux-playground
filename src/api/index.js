const v4 = require("uuid/v4");

// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  todos: [
    {
      id: "d3aa75e9-b7ac-46be-a735-d7adc71d1969",
      text: "hey",
      completed: true
    },
    {
      id: "128b0ed6-33dd-43bb-8f78-d62eb2aba167",
      text: "ho",
      completed: true
    },
    {
      id: "316f368a-e57b-4573-ab7a-6b8981e7cc97",
      text: "let’s go",
      completed: false
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    switch (filter) {
      case "all":
        return fakeDatabase.todos;
      case "active":
        return fakeDatabase.todos.filter(t => !t.completed);
      case "completed":
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
      id: v4(),
      text,
      completed: false
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeDatabase.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
