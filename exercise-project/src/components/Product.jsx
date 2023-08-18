import React from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const navigate = useNavigate();
  const { title, imgUrl, price, id } = props.data;

  const Title = () => {
    const csst1 = {
      marginTop: "70px",
      textAlign: "center",
    };
    return (
      <>
        <h3 style={csst1}>MD's Pick</h3>
        <p style={{ textAlign: "center" }}>시선을 사로잡는 스타일</p>
      </>
    );
  };

  return (
    <div className="col-md-4">
      <Nav.Link className="c1" onClick={() => navigate("/detail/" + id)}>
        <img src={imgUrl} width="80%" alt={title}></img>
        <h4>{title}</h4>
        <p>{price}</p>
      </Nav.Link>
    </div>
  );
};

export default Product;
