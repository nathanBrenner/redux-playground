import { v4 } from "node-uuid";
import * as api from "../api";

export const addTodo = text => ({
  type: "ADD_TODO",
  text,
  id: v4()
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

const recieveTodos = (filter, response) => ({
  type: "RECIEVE_TODOS",
  filter,
  response
});

export const fetchTodos = filter =>
  api.fetchTodos(filter).then(response => recieveTodos(filter, response));
