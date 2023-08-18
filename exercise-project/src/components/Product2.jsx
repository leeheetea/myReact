import React from "react";

const Product2 = (props) => {
  const { title, content, imgUrl, price } = props.data;

  return (
    <div className="col-md-4">
      <img src={imgUrl} width="80%" alt={title} />
      <h5>{title}</h5>
      <span>{content}</span>
      <p>{price}</p>
    </div>
  );
};

export default Product2;
