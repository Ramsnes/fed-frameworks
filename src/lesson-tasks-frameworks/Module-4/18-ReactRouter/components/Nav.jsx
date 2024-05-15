// Nav.jsx
// <Link Nav() comp to my pages.jsx
// Add Nav() to the <Header> comp

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/product/1">Product 1</Link>
        </li>
        <li>
          <Link to="/product/2">Product 2</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
