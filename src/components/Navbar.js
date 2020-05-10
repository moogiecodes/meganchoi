import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {

  return (
    <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light text-lowercase">
      {/* <div className="navbar-brand navbar-collapse mx-auto">megan choi</div> */}
      <ul className="navbar-nav navbar-collapse mx-auto">
        <NavLink className="m-2 nav-link" exact to="/">
          home
        </NavLink>
        <NavLink className="m-2 nav-link" exact to="/about">
          about
        </NavLink>
        <NavLink className="m-2 nav-link" exact to="/portfolio">
          portfolio
        </NavLink>
        <NavLink className="m-2 nav-link" exact to="/connect">
          connect
        </NavLink>
      </ul>
    </nav>
  );
}