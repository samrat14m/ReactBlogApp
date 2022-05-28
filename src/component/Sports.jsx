import React, { useContext } from "react";
import { SportsContext } from "../contexts/SportsContext";

const Sports = () => {
  const { sportsData } = useContext(SportsContext);
  return (
    <div className="Container">
      <h1>Cricket</h1>
      <hr />
      {sportsData.map((blog) => {
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

export default Sports;
