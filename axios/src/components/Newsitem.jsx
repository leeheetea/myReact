import React from "react";
import "../css/Newsitem.css";

const Newsitem = ({ article }) => {
  let { title, description, url, urlToImage } = article;
  urlToImage = urlToImage || "http://placehold.it/160x100";

  return (
    <div className="newsItemBlock">
      <div className="thumnail">
        <a href={url}>
          <img src={urlToImage} alt="thumnail" />
        </a>
      </div>
      <div className="contents">
        <a href={url}>
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Newsitem;
