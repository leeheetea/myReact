import React from "react";

const Student = ({ student, dispatch }) => {
  const { id, name, isHere } = student;

  const onDelete = () => {
    dispatch({ type: "DELETE", payload: { id: id } });
  };

  const onCheck = () => {
    dispatch({ type: "CHECK", payload: { id: id } });
  };

  return (
    <div>
      <span
        style={{ textDecoration: isHere && "line-through" }}
        onClick={onCheck}
      >
        {name}
      </span>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Student;
