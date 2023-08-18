import React from "react";
import { useParams } from "react-router-dom";

const Detail = (props) => {
  let { id } = useParams();
  id = parseInt(id);
  const { title, imgUrl, content, price } = props.data[id];

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"../" + imgUrl} alt={title} width="80%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{title}</h4>
          <p>{content}</p>
          <p>{price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
