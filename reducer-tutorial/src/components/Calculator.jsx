import React, { useReducer, useState } from "react";

const Calculator = () => {
  const [inputNumber, setInputNumber] = useState(0);

  const reducer = (state, action) => {
    switch (action.type) {
      case "up":
        return state + action.number;
      case "down":
        return state - action.number;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, 0);

  const onChange = (e) => {
    setInputNumber(Number(e.target.value));
  };
  const up = () => {
    dispatch({ type: "up", number: inputNumber });
  };
  const down = () => {
    dispatch({ type: "down", number: inputNumber });
  };

  return (
    <div>
      <button onClick={up}>up</button>
      value : {state}
      <button onClick={down}>down</button>
      <div>
        <input type="text" value={inputNumber} onChange={onChange} />
      </div>
    </div>
  );
};

export default Calculator;
