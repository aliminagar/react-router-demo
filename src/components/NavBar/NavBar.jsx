import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reviews">Emoji Reviews</Link>
        </li>
        <li>
          <Link to="/about-me">About Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
