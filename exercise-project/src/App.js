import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import itemData from "./itemData";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id?" element={<Detail data={itemData} />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/about" element={<div>about 페이지</div>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
