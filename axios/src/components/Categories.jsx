import React from "react";
import "../css/Categories.css";
import { NavLink } from "react-router-dom";

const categories = [
  { name: "all", text: "전체보기" },
  { name: "business", text: "business" },
  { name: "entertainment", text: "entertaiment" },
  { name: "health", text: "health" },
  { name: "science", text: "science" },
  { name: "sports", text: "sports" },
  { name: "technology", text: "technology" },
];

const Categories = () => {
  return (
    <div className="categoriesBlock">
      {categories.map((c) => (
        <div className="category" key={c.name}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to={c.name === "all" ? "/" : "/" + c.name}
          >
            {c.text}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Categories;
