import React from "react";
import { useLoaderData } from "react-router-dom";
import Carousel from "./Carousel";
import Estate from "./Estate";
import SectionTitle from "../SectionTitle/SectionTitle";

const Home = () => {
  const estates = useLoaderData();
  console.log(estates);

  return (
    <div>
      <Carousel />
      <div className="my-4">
        <h1 className="text-3xl font-bold text-center">Explore our properties</h1>
        <h1 className="text-xl text-center w-2/3 mx-auto">Discover a world of possibilities as you explore our diverse range of properties. From cozy homes to luxurious estates, find your perfect match with us.</h1>
        <hr/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate} />
        ))}
      </div>
    </div>
  );
};

export default Home;
