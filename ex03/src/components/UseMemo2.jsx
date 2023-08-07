import React, { useMemo, useState } from "react";

const UseMemo2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = (korea) => {
    console.log("korea value : ', korea");
    return korea ? "korea" : "forgien";
  };

  const country = useMemo(() => {
    return location(isKorea);
  }, [isKorea]);

  return (
    <div>
      <h2>how many eat to meal?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <h2>where are you from?</h2>
      <p>nation : {country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>get on airplane</button>
    </div>
  );
};

export default UseMemo2;
