import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { MainState } from "./AppLayout";

const Navbar = (props) => {
  const value = useContext(MainState);
  let [isAdmin, setIsAdmin] = value;
  const [click, setClick] = useState(false);
  const [user, setUser] = useState();
  sessionStorage.getItem("user");
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const logout = () => {
    sessionStorage.clear();
  };

  return (
    <>
      <div>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink to="/" className="nav-logo">
              <div className="logo"></div>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/viewstock" className="nav-links">
                  View Stock
                </NavLink>
              </li>
              {isAdmin ? (
                <li className="nav-item">
                  <NavLink
                    to="/addstock"
                    className="nav-links"
                    onClick={() => {
                      console.log("isAdmin on click nav", isAdmin);
                    }}
                  >
                    Add Stock
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-links">Add Stock</NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Sign in
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/signup"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
