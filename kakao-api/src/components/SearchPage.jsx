import React from "react";
import axios from "axios";
import { useState } from "react";
import { useCallback } from "react";

const SearchPage = ({ title }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [articles, setArticles] = useState([]);

  const requestAPI = useCallback(async () => {
    const url = `https://dapi.kakao.com/v3/search/book?target=title&query=${query}&page=${page}`;
    const config = {
      headers: {
        Authorization: "KakaoAK dc8d40f2136deeecad5055925f2695db",
      },
      params: { query: query, size: 10, page: page },
    };

    const result = await axios(url, config);
    setArticles(result.data.documents);

    const totalPage = result.data.meta.pageable_count;
    setLastPage(Math.ceil(totalPage / 10));
  }, [page, query]);

  const onSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    requestAPI();
  };

  const onNextPage = () => {
    setArticles([]);
    setPage((prevPage) => prevPage + 1);
  };

  const onPreviousPage = () => {
    setArticles([]);
    setPage((prevPage) => prevPage - 1);
  };

  return (
    <>
      <div className="main-title">
        <h1>{title}</h1>
      </div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="검색할 도서명을 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSubmit={onSubmit}
        />
        <button>검색</button>
      </form>
      <div className="articles">
        {articles.map((a) => (
          <div key={a.url} className="box">
            <a href={a.url}>
              <img
                src={
                  a.thumbnail
                    ? a.thumbnail
                    : "http://via.placeholder.com/120x150"
                }
                alt=""
              />
            </a>
            <div className="booktitle">{a.title}</div>
          </div>
        ))}
      </div>
      <div className="pageButton">
        <button onClick={onPreviousPage} disabled={page === 1}>
          이전
        </button>
        <span>
          {page} / {lastPage}
        </span>
        <button
          onClick={onNextPage}
          disabled={page === lastPage || lastPage === 0}
        >
          앞으로
        </button>
      </div>
    </>
  );
};

export default SearchPage;
