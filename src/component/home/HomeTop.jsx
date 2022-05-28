import React from "react";
import "./home.css";
const HomeTop = ({ data }) => {
  return (
    <div className="homeTop">
      <div>
        <img src={data[2].ImageAsset} alt="not found" width="300px" />
        <p>{data[2].PublishedDate}</p>
      </div>
      <div className="picTwo">
        <div className="topItem">
          <img src={data[4].ImageAsset} alt="not found" width="200px" />
          <p>{data[2].PublishedDate}</p>
        </div>
        <div className="topItem">
          <img src={data[7].ImageAsset} alt="not found" width="200px" />
          <p>{data[2].PublishedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTop;
