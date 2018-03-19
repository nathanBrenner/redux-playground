import { connect } from "react-redux";
import { toggleTodo } from "../actions";
import TodoList from "./TodoList";
import { withRouter } from "react-router";
import { getVisibleTodos } from "../reducers";

const mapStateToProps = (state, { match: { params: { filter } } }) => {
  return {
    todos: getVisibleTodos(state, filter || "all")
  };
};

const VisibleTodoList = withRouter(
  connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList)
);

export default VisibleTodoList;
