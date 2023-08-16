import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import "./TodoListItem.css";
import cn from "classnames";

const TodoListItem = ({ todo, dispatch }) => {
  const { id, text, checked } = todo;

  const onDelete = () => {
    dispatch({
      type: "DELETE",
      todo: {
        id: id,
      },
    });
  };

  const onToggle = () => {
    dispatch({
      type: "TOGGLE",
      todo: {
        id: id,
        text: text,
        checked: checked,
      },
    });
  };
  return (
    <div className="TodoListItem">
      <div className={cn("checkbox", { checked })}>
        <div onClick={onToggle}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </div>
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={onDelete}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
