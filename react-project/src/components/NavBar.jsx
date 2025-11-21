import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="logo">My App</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default NavBar;
