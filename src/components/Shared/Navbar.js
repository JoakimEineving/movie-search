import React from "react";
import "./Navbar.scss";
import ArrowBack from "../Buttons/ArrowBack";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <ArrowBack />
      <h1>
        <a href="/">MovieDB</a>
      </h1>
    </div>
  );
};

export default Navbar;
