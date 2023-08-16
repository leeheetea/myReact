import React, { useState, useEffect } from "react";
import Newsitem from "../components/Newsitem";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fecthData = async () => {
  //     setLoading(true);
  //     try {
  //       const url = "https://newsapi.org/v2/top-headlines?country=kr";
  //       const query = category === "all" ? "" : "&category=" + category;
  //       const apiKey = "&apikey=8044e094c0d445e497e559590917711b";
  //       const response = await axios.get(url + query + apiKey);
  //       setArticles(response.data.articles);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //     setLoading(false);
  //   };
  //   fecthData();
  // }, [category]);

  const [loading, response, error] = usePromise(() => {
    const url = "https://newsapi.org/v2/top-headlines?country=kr";
    const query = category === "all" ? "" : "&category=" + category;
    const apiKey = "&apikey=8044e094c0d445e497e559590917711b";
    return axios.get(url + query + apiKey);
  }, [category]);

  if (loading) {
    return <div className="newsListBlock">data loading</div>;
  }

  if (!response) {
    return null;
  }

  if (error) {
    return <div className="newsListBlock"> 404 NOT FOUND </div>;
  }

  const { articles } = response.data;

  return (
    <div className="newsListBlock">
      {articles.map((article) => (
        <Newsitem key={article.url} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
