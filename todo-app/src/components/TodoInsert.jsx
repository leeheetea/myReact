import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.css";

const TodoInsert = ({ dispatch, nextId }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "INSERT",
      todo: {
        id: nextId.current++,
        text: value,
        checked: false,
      },
    });
    setValue("");
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
