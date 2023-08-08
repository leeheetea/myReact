import React, { useState } from "react";
import { TiDelete } from "react-icons/ti";
import "./TodoModal.css";

const TodoModal = (todos, { setIsmodal }) => {
  const closeModal = () => {
    setIsmodal(false);
  };

  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {};

  return (
    <div className="container">
      <button className="close" onClick={closeModal}>
        <TiDelete />
      </button>
      <form className="container-text">
        <p>수정 할 내용을 입력하세요</p>
        <input type="text" value={value} onChange={onChange} />
        <button onSubmit={onSubmit}>나의 버튼이다</button>
      </form>
    </div>
  );
};

export default TodoModal;
