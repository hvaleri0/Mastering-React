import React from "react";
//Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar-Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="navbar1">
        Navbar{" "}
        <span className="badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};
export default NavBar;
