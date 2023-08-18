import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import itemData from "./itemData";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail data={itemData} />}></Route>
        <Route path="/cart" element={<div>카트 페이지</div>}></Route>
        <Route path="/about" element={<div>about 페이지</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
