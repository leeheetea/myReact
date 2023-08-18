import React, { useState } from "react";
import Product from "./Product";
import itemData from "../itemData";
import { Button } from "react-bootstrap";
import "../css/main.css";
import Product2 from "./Product2";
import nike from "../nike";
import axios from "axios";

const Main = () => {
  const [productData, setItemData] = useState(itemData);
  const [nikeData, setnikeData] = useState(nike);

  const Title = () => {
    const css = {
      marginTop: "70px",
      textAlign: "center",
    };
    return (
      <>
        <h3 style={css}>MD's Pick</h3>
        <p style={{ textAlign: "center" }}>시선을 사로잡는 스타일</p>
      </>
    );
  };

  const Title2 = () => {
    const css = {
      marginTop: "70px",
      textAlign: "center",
    };
    return (
      <>
        <h3 style={css}>여름을 위한 컬렉션</h3>
        <p style={{ textAlign: "center" }}>
          가볍게 시원하게 여름 컬렉션으로 여름을 준비해 보세요
        </p>
      </>
    );
  };

  const sortByName = () => {
    let sortedData = [...productData].sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    setItemData(sortedData);
  };

  const sortByPriceAsc = () => {
    let sortedData = [...productData].sort((a, b) =>
      a.price > b.price ? -1 : 1
    );
    setItemData(sortedData);
  };

  const sortByPriceDec = () => {
    let sortedData = [...productData].sort((a, b) =>
      a.price > b.price ? 1 : -1
    );
    setItemData(sortedData);
  };

  const [count, setCount] = useState(1);
  const onAxios = () => {
    setCount(count + 1);
    if (count === 1) {
      axios
        .get(
          "https://raw.githubusercontent.com/leeheetea/myReact/main/reactRepository/nike2.json"
        )
        .then((result) => {
          const resultNike = [...nikeData, ...result.data];
          setnikeData(resultNike);
        });
    } else if (count === 2) {
      axios(
        "https://raw.githubusercontent.com/leeheetea/myReact/main/reactRepository/nike3.json"
      ).then((result) => {
        const resultNike = [...nikeData, ...result.data];
        setnikeData(resultNike);
      });
    } else {
      alert("상품 없어요");
    }
  };

  return (
    <div>
      <div className="slider"></div>
      <Title />
      <div className="sort-button">
        <Button variant="outline-primary" onClick={sortByName}>
          이름 순 정렬
        </Button>
        {""}
        <Button variant="outline-secondary" onClick={sortByPriceAsc}>
          낮은가격 순 정렬
        </Button>
        {""}
        <Button variant="outline-success" onClick={sortByPriceDec}>
          낮은가격 순 정렬
        </Button>
        {""}
      </div>
      <div className="container">
        <div className="row">
          {itemData.map((data, index) => {
            return (
              <Product data={productData[index]} key={productData[index].id} />
            );
          })}
        </div>
        <Title2 />
        <Button variant="outline-success" onClick={onAxios}>
          +3개 더 보기
        </Button>
        <div className="container mt-5">
          <div className="row">
            {nikeData.map((p, index) => {
              return (
                <Product2 key={nikeData[index].id} data={nikeData[index]} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
