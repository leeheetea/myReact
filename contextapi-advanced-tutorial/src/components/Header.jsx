import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const Header = () => {
  const { state } = useContext(ThemeContext);
  return (
    <div
      style={{
        background: state.isDark ? "black" : "lightgray",
        color: state.isDark ? "white" : "black",
      }}
    >
      <h1>Welcome 홍길동</h1>
    </div>
  );
};

export default Header;
