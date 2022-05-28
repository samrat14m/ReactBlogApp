import React, { useContext } from "react";
import { BusinessContext } from "../contexts/BusinessContext";

const Business = () => {
  const { businessData } = useContext(BusinessContext);
  return (
    <div className="Container">
      <h1>Business</h1>
      {businessData.map((blog) => {
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

export default Business;
