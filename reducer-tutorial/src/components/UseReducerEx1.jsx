import React, { useReducer, useState } from "react";

const UseReducerEx1 = () => {
  const [number, setNumber] = useState(0);

  const reducer = (state, actions) => {
    switch (actions.type) {
      case "INPUT":
        return state + actions.price;
      case "OUTPUT":
        return state - actions.price;
      default:
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  const onInput = () => {
    dispatch({
      type: "INPUT",
      price: number,
    });
  };

  const onOutput = () => {
    dispatch({
      type: "OUTPUT",
      price: number,
    });
  };

  return (
    <div>
      <h2>은행에 오신걸 환영합니다.</h2>
      <p>잔고 : {state}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(Number(e.target.value));
        }}
        placeholder="금액을 입력하세요"
      />
      <button onClick={onInput}>예금</button>
      <button onClick={onOutput}>출금</button>
    </div>
  );
};

export default UseReducerEx1;
