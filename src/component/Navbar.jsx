import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Home
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <Link to="/bollywood">
                <li>Bollywood</li>
              </Link>
              <Link to="/business">
                <li>Business</li>
              </Link>
              <Link to="/technology">
                <li>Technology</li>
              </Link>
              <Link to="/football">
                <li>Football</li>
              </Link>
              <Link to="/sports">
                <li>Cricket</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default NavBar;
