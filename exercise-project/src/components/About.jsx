import React from "react";
import { Outlet } from "react-router-dom";

function Member() {
  return <h4>Member</h4>;
}

function Location() {
  return <h4>Location</h4>;
}

const About = () => {
  return (
    <>
      <h4>회사 정보</h4>
      <Outlet></Outlet>
    </>
  );
};

export default About;
