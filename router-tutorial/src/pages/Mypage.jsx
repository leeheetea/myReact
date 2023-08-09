import React from "react";
import { Navigate } from "react-router-dom";

const Mypage = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>Mypage</div>;
};

export default Mypage;
