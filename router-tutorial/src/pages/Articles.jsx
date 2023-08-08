import { Link } from "react-router-dom";

const Articles = () => {
  return (
    <ul>
      <li>
        <Link to="/articles/1">게시글</Link>
      </li>
      <li>
        <Link to="/articles/2">게시글2</Link>
      </li>
      <li>
        <Link to="/articles/3">게시글3</Link>
      </li>
    </ul>
  );
};

export default Articles;
