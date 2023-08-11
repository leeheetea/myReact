import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Content = () => {
  const { state } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: state.isDark ? "black" : "lightgray",
        color: state.isDark ? "white" : "black",
      }}
    >
      <p>홍길동님, 좋은 하루 되세요</p>
    </div>
  );
};

export default Content;
