import React, { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "./sidemenu.css";

const SideMenu = ({ menuOpen }) => {
  return (
    <div className={"side-container" + (menuOpen ? " side-open" : "")}>
      <NavLink to="/" className="side-menu-item">
        Home
      </NavLink>
      <NavLink to="/about" className="side-menu-item">
        About
      </NavLink>
      <NavLink to="/contact" className="side-menu-item">
        Contact
      </NavLink>
    </div>
  );
};

export default SideMenu;
