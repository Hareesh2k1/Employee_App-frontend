import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <Link to="/"  style={{textDecoration:"none",color:"black"}}>Empolyee</Link>&nbsp;&nbsp;
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
              <Link to="/"  style={{textDecoration:"none",color:"white"}}>Home</Link>
              </li>&nbsp;&nbsp;
              <li className="nav-item ">
              <Link to="/form"  style={{textDecoration:"none",color:"black"}}>Add Empolyee</Link>&nbsp;&nbsp;
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
