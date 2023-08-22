import React from "react";
import "../css/MainHeader.css";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <>
      <div className="search-container">
        <span>project2</span>
        <div className="searchbar-container">
          <input className="searchbar" type="text" placeholder="검색어 입력" />
          <RiSearchLine />
        </div>
        <div className="search-container-menu">
          <span>로그인</span>
          <span>회원가입</span>
          <span>마이페이지</span>
          <span>예약확인/취소</span>
        </div>
      </div>
    </>
  );
};

const MainHeader = () => {
  return <SearchBar />;
};

export default MainHeader;
