import React, { useCallback, useState } from "react";
import Box from "../components/Box";

const BoxSize = () => {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(true);

  const boxStyle = useCallback(() => {
    return {
      backgroundColor: "tomato",
      width: `${size}px`,
      height: `${size}px`,
      marginTop: `5px`,
    };
  }, [size]);

  return (
    <div>
      <input
        type="number"
        value={size}
        step={100}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>backgroundColor Change</button>
      <div style={{ background: isDark ? "black" : "white" }}>
        <Box boxStyle={boxStyle}></Box>
      </div>
    </div>
  );
};

export default BoxSize;
