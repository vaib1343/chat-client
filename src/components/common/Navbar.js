import React from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
function Navbar() {
  const history = useHistory();
  const handleClick = () => {
    window.localStorage.setItem("token", "");
    history.push("/");
  };
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link className="link" to="/">
              chat
            </Link>
          </div>
          <div className="option">
            <ul className="">
              <li>
                <Link className="link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="link" to="/register">
                  SignUp
                </Link>
              </li>
              {history.location.pathname === "/chat" && (
                <li>
                  <span className="link" onClick={handleClick}>
                    SIGNOUT
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
