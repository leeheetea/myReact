import "./App.css";
import { Route, Routes } from "react-router-dom";
import Newspage from "./components/Newspage";

function App() {
  return (
    <Routes>
      <Route path="/:category?" element={<Newspage />} />
    </Routes>
  );
}

export default App;
