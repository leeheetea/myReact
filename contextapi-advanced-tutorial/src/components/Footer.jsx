import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Footer = () => {
  const { state, action } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: state.isDark ? "black" : "lightgray",
        color: state.isDark ? "white" : "black",
      }}
    >
      <button
        className="button"
        onClick={() => action.setIsDark(!state.isDark)}
      >
        변경하기
      </button>
    </div>
  );
};

export default Footer;
