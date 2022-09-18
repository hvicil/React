import React, { useContext } from "react";
import StoreContext from "../../../store";
import "./header.scss";

const Header = () => {
  const store = useContext(StoreContext);
  const { darkMode } = store;
  return (
    <header>
      <h1>B60-61-96 React Practices</h1>
    </header>
  );
};

export default Header;
