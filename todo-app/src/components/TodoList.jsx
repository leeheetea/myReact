import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, dispatch }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default TodoList;
