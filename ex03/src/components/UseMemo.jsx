import React, { useMemo, useState } from "react";

const hardCalculator = (number) => {
  let now = Date.now();
  let start = now;

  while (now < start + 2000) {
    now = Date.now();
  }
  console.log("hard calculator");
  return number + 1000;
};

const easyCalculator = (number) => {
  console.log("easy calculator");
  return number + 1;
};

const UseMemo = () => {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  const easySum = useMemo(() => easyCalculator(easyNumber), [easyNumber]);
  const hardSum = useMemo(() => hardCalculator(hardNumber), [hardNumber]);
  return (
    <div>
      <h3>hard calculator</h3>
      <hr />
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <span> + 1000 = {hardSum}</span>

      <h3> easy calculator</h3>
      <hr />
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
};

export default UseMemo;
