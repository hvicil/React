import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/hello-world">Hello World</Link>
        </li>
        <li>
          <Link to="/">Comp</Link>
        </li>

        <li>
          <Link to="/">JSX</Link>
          <ul>
            <li>
              <Link to="/">JSX1</Link>
            </li>
            <li>
              <Link to="/jsx2">JSX2</Link>
            </li>
            <li>
              <Link to="/">JSX3</Link>
            </li>
            <li>
              <Link to="/">JSX4</Link>
            </li>
            <li>
              <Link to="/">JSX5</Link>
            </li>
            <li>
              <Link to="/">JSX Practise</Link>
            </li>
          </ul>
        </li>

        <li>
          <Link to="/">Styles</Link>

          <ul>
            <li>
              <Link to="/">Style1</Link>
            </li>
            <li>
              <Link to="/">Style2</Link>
            </li>
            <li>
              <Link to="/">Style3</Link>
            </li>
            <li>
              <Link to="/exchange">Exchange</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
