import React, { useContext } from "react";
import { FootballContext } from "../contexts/FootballContext";

const Football = () => {
  const { footballData } = useContext(FootballContext);

  return (
    <div className="Container">
      <h1>Football</h1>
      <hr />
      {footballData.map((blog) => {
        return (
          <div className="BlogList">
            <img
              src={blog.urlToImage}
              alt=""
              style={{ height: "auto", width: "250px", marginRight: "1rem" }}
            />
            <div>
              <a href={blog.url}>
                <h5>{blog.title}</h5>
              </a>
              <p>{blog.description}</p>
              <p>
                <b>{blog.author}</b>/{blog.publishedAt}
              </p>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Football;
