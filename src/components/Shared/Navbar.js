import "./Shared.scss";

import React from "react";

import ArrowBack from "../Buttons/ArrowBack";
import { LogoMotion } from "../index";

const Navbar = ({ animate }) => {
  return animate ? (
    <LogoMotion>
      <div className="navbar-container">
        <ArrowBack />
        <h1>
          <a href="/">MovieDB</a>
        </h1>
      </div>
    </LogoMotion>
  ) : (
    <div className="navbar-container">
      <ArrowBack />
      <h1>
        <a href="/">MovieDB</a>
      </h1>
    </div>
  );
};

export default Navbar;
