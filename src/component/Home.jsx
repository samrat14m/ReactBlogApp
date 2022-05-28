import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
//import HomeTop from "./home/HomeTop";
import TheLatest from "./home/TheLatest";
const Home = () => {
  const { data } = useContext(DataContext);
  //  const rand1 = Math.floor(Math.random() * 9) + 1;
  //  const rand2 = Math.floor(Math.random() * 9) + 1;
  // const rand3 = Math.floor(Math.random() * 9) + 1;
  const randData = data.filter((blog) => blog.id % 2 === 0);
  console.log(randData);

  return (
    <>
      <TheLatest data={data} />
      <hr></hr>
      <h2>Latest Articles</h2>
      <div className="Container">
        {randData.map((randData) => {
          return (
            <div className="BlogList">
              <img
                src={randData.ImageAsset}
                alt="not found"
                style={{ width: "200px" }}
              />
              <div>
                <h2>{randData.Title}</h2>
                <h6>{randData.PublishedDate}</h6>
                <p>{randData.BlogContent}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
