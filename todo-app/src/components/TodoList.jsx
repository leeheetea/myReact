import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemove, onToggle, showModal }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          showModal={showModal}
        />
      ))}
    </div>
  );
};

export default TodoList;
