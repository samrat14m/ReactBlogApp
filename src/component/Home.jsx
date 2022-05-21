import React from "react";
import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/Bollywood">Bollywood</Link>
          </li>
          <li>
            <Link to="/Technology">Technology</Link>
          </li>
          <li>
            <Link to="/Travel">Travel</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Home;
