import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarMain() {
  // const [expanded, setExpanded] = useState(false);
  // <nav className="navbar navbar-expand-sm navbar-light bg-light text-lowercase">
  // const navStyle = {
  //   maxHeight: '45vh'
  // }
  return (
    <Navbar collapseOnSelect bg="light" expand="sm" className="text-lowercase static-top" id="navb">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" id="nav-btn" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="navbar-nav mr-auto">
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
      </Navbar.Collapse>
    </Navbar>
  );
}
