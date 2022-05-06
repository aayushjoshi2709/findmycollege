import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Navbar({ currentUser, setCurrentUser }) {
  const logMeOut = () => {
    axios
      .post("http://localhost:3000/users/signout")
      .then((res) => {
        if (res.status === 201) {
          setCurrentUser({});
        }
      });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          FindMyCollege
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Colleges
              </Link>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/colleges">
                    List All Colleges
                  </Link>
                </li>
                {currentUser.username ? (
                  <>
                    <div className="dropdown-divider"></div>
                    <li>
                      <Link className="dropdown-item" to="/colleges/new">
                        Add College
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Update College
                      </Link>
                    </li>
                  </>
                ) : (
                  ""
                )}
              </ul>
            </li>
            <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {currentUser.username
                ? "Hi, " + currentUser.username
                : "Login / Signup"}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {currentUser.username ? (
                <>
                  <li>
                    <Link className="dropdown-item" to="/user/dashboard">
                      Dashboard
                    </Link>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/"
                      onClick={() => logMeOut()}
                    >
                      logout
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="dropdown-item" to="/user/login">
                      Login
                    </Link>
                  </li>
                  <div className="dropdown-divider"></div>
                  <li>
                    <Link className="dropdown-item" to="/user/new">
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
