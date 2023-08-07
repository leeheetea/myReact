import React, { useEffect, useRef, useState } from "react";

const Box = ({ boxStyle }) => {
  const [style, setStyle] = useState();
  const countRender = useRef(0);

  useEffect(() => {
    countRender.current += 1;
    console.log("boxSize Function is created", countRender);
    setStyle(boxStyle);
  }, [boxStyle]);

  return (
    <div>
      <div style={style}></div>
    </div>
  );
};

export default Box;
