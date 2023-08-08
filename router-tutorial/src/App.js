import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/profiles/:username" element={<Profile />}></Route>
      <Route path="/articles" element={<Articles />}></Route>
      <Route path="/articles/:id" element={<Article />}></Route>
    </Routes>
  );
};

export default App;
