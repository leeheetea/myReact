import React, { useMemo, useState } from "react";

const getAverage = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([10, 20, 30]);
  const [number, setNumber] = useState("");

  const onInsert = () => {
    setList(list.concat(parseInt(number)));
    setNumber("");
  };
  const average = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={onInsert}>registration</button>

      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <h2>Average: {average}</h2>
    </div>
  );
};

export default Average;
