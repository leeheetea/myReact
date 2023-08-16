import React, { useState, useReducer } from "react";
import Student from "./Student";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const name = action.payload.name;
      const newStudent = { id: Date.now(), name, isHere: false };
      return {
        count: state.count + 1,
        students: [...state.students, newStudent],
      };
    case "DELETE":
      return {
        count: state.count - 1,
        students: state.students.filter(
          (student) => student.id !== action.payload.id
        ),
      };
    case "CHECK":
      const newStudents = state.students.map((student) => {
        if (student.id === action.payload.id) {
          return { ...student, isHere: !student.isHere };
        } else {
          return student;
        }
      });
      return {
        count: state.count,
        students: newStudents,
      };
    default:
      return state;
  }
};

const initState = {
  count: 1,
  students: [{ id: Date.now(), name: "html", isHere: false }],
};

const UseReducerEx2 = () => {
  const [name, setName] = useState("");
  const [studentsInfo, dispatch] = useReducer(reducer, initState);

  const onAdd = () => {
    dispatch({ type: "ADD", payload: { name: name } });
  };

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder="이름을 입력하세요"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={onAdd}>ADD</button>
      <hr />
      {studentsInfo.students.map((student) => (
        <Student key={student.id} student={student} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default UseReducerEx2;
