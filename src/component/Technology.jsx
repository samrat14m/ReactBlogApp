import React, { useContext } from "react";
import { TechContext } from "../contexts/TechContext";

const Technology = () => {
  const { techData } = useContext(TechContext);
  return (
    <div className="Container">
      <h1>Technology</h1>
      {techData.map((blog) => {
        return (
          <div className="BlogList">
            <img
              src={blog.urlToImage}
              alt=""
              style={{ height: "auto", width: "250px" }}
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

export default Technology;
