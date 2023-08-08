import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Route,
  Routes,
  NavLink,
  useParams,
  useMatch,
} from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home</h2>
      home...
    </div>
  );
}

const contents = [
  { id: 1, title: "HTML", text: "HTML is ..." },
  { id: 2, title: "JS", text: "JS is ..." },
  { id: 3, title: "React", text: "React is ..." },
];

function Topic() {
  const aho = useMatch();
  const { topic_id } = useParams();
  const selected_topic = contents.find(
    (content) => content.id === Number(topic_id)
  ) || { title: "Sorry", text: "Not Found" };

  return (
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.text}
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>
            <NavLink to={"/topics/" + content.id}>{content.title}</NavLink>
          </li>
        ))}
      </ul>
      <Routes>
        <Route path="/:topic_id" element={<Topic />} />
      </Routes>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello React Router DOM</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/topics">Topics</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics/*" element={<Topics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={"Not Found"} />
      </Routes>
    </div>
  );
}

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
