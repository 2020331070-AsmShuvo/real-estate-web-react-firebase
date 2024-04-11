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
      <div className="pt-8 bg-[#a6886dd6] border-8 border-[#a6886d] rounded-xl mx-12">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-2">Explore our properties</h1>
        <h1 className="text-sm text-center w-2/3 mx-auto mb-4 text-gray-50">Discover a world of possibilities as you explore our diverse range of properties. From cozy homes to luxurious estates, find your perfect match with us.</h1>
    
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
