import React from "react";
import { useLoaderData } from "react-router-dom";
import Carousel from "./Carousel";
import Estate from "./Estate";

const Home = () => {
  const estates = useLoaderData();
  console.log(estates);

  return (
    <div>
      <Carousel />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {
          estates.map (estate => <Estate key={estate.id} estate={estate}/>)
        }
        </div>
    </div>
  );
};

export default Home;
