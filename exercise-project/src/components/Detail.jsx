import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { addItem } from "../store";
import { useDispatch } from "react-redux";

const Box = styled.div`
  padding: 20px;
  color: gray;
`;

const YellowBtn = styled.button`
  bacground-color: gold;
  color: white;
  font-size: 30px;
  padding: 100px;
  width: 100%;
  border: 1px solid #ccc;
  background-image: url("https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80");
  background-size: cover;
  background-position: center;
`;
const Detail = (props) => {
  let { id } = useParams();
  id = parseInt(id || "0");
  const { title, imgUrl, content, price } = props.data[id];
  const [tap, setTap] = useState(0);
  const [fade, setFade] = useState("");

  useEffect(() => {
    setFade("end");
    return () => {
      setFade("");
    };
  }, []);

  const dispatch = useDispatch();
  // function TabContent({ tap }) {
  //   return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap];
  // }
  function TabContent({ tap }) {
    switch (tap) {
      case 0:
        return <div>내용1</div>;
      case 1:
        return <div>내용2</div>;
      case 2:
        return <div>내용3</div>;
      default:
        return <div></div>;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className={"container start " + fade}>
          <Box>
            <YellowBtn>지금 구매하면 10% 할인</YellowBtn>
          </Box>
        </div>
        <div className="col-md-6">
          <img src={"../" + imgUrl} alt={title} width="80%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{title}</h4>
          <p>{content}</p>
          <p>{price}</p>
          <button
            className="btn btn-danger me-2"
            onClick={() => {
              dispatch(
                addItem({
                  id: id,
                  imgUrl: imgUrl,
                  price: price,
                  title: title,
                  count: 1,
                })
              );
            }}
          >
            주문하기
          </button>
          <Link to="/cart">
            <Button variant="outline-success">주문상품 확인하기</Button>
          </Link>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => setTap(0)} eventKey={"link0"}>
            상품내역
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTap(1)} eventKey={"link1"}>
            배송안내
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTap(2)} eventKey={"link2"}>
            문의하기
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tap={tap} />
    </div>
  );
};

export default Detail;
