import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const Bollywood = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="Container">
      <h1> Bollywood </h1>
      {data.map((randData) => {
        return (
          <div className="BlogList">
            <img
              src={randData.ImageAsset}
              alt="not found"
              style={{ width: "200px" }}
            />
            <div>
              <h3>{randData.Title}</h3>
              <h6>{randData.PublishedDate}</h6>
              <p>{randData.BlogContent}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bollywood;
