import React from "react";
import { useParams } from "react-router-dom";
import Categories from "./Categories";
import NewsList from "./NewsList";

const Newspage = () => {
  let { category } = useParams();
  if (!category) {
    category = "all";
  }
  return (
    <div>
      <Categories />
      <NewsList category={category} />
    </div>
  );
};

export default Newspage;
