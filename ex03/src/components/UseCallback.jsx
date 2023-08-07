import React, { useEffect, useRef, useState } from "react";
import { useCallback } from "react";

const UseCallback = () => {
  const [number, setNumber] = useState(0);
  const countRender = useRef(0);
  const [toggle, setToggle] = useState(true);

  const someFunction = useCallback(() => {
    console.log("Function is created", { number });
    return;
  }, [number]);

  useEffect(() => {
    countRender.current += 1;
    console.log("new function is created", countRender.current);
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={someFunction}> Call someFunction</button>
      <p>
        <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      </p>
    </div>
  );
};

export default UseCallback;
