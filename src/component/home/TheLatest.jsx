import React from "react";
const TheLatest = ({ data }) => {
  return (
    <div className="Container">
      <h2>The Latest</h2>
      <div
        style={{
          width: "96%",
          margin: "5vh 2%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "beige",
        }}
      >
        {data
          .filter((blog) => blog.id % 3 === 0)
          .map((blog) => {
            return (
              <div className="card">
                <img src={blog.ImageAsset} alt="" style={{ height: "40%" }} />
                <h5>{blog.Title}</h5>
                <p>{blog.BlogContent}</p>
                <p>
                  <b>{blog.CategoryName}</b>/{blog.PublishedDate}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TheLatest;
