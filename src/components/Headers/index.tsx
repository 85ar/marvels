import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <Link to="/characters">Characters</Link>
          <li></li>
          <Link to="/comics">Comics</Link>
          <li></li>
        </ul>
      </nav>
    </div>
  );
};

export default Headers;
