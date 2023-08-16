import React, { useCallback, useReducer, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoModal from "./components/TodoModal";

const App = () => {
  //일정 리스트
  const todos = [
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들기",
      checked: false,
    },
  ];

  // 기능 함수들
  const nextId = useRef(4);

  //useReduce

  //리듀서
  const reducer = (todoState, actions) => {
    switch (actions.type) {
      case "INSERT":
        return todoState.concat(actions.todo);
      case "DELETE":
        return todoState.filter((todo) => todo.id !== actions.todo.id);
      case "TOGGLE":
        return todoState.map((todo) =>
          todo.id === actions.todo.id
            ? { ...todo, checked: !todo.checked }
            : todo
        );
      default:
        break;
    }
  };

  const [todoState, dispatch] = useReducer(reducer, todos);

  return (
    <>
      <TodoTemplate>
        <TodoInsert dispatch={dispatch} nextId={nextId} />
        <TodoList todos={todoState} dispatch={dispatch} />
      </TodoTemplate>
    </>
  );
};

export default App;
