import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Estate from "./Estate";
import Marquee from "react-fast-marquee";
import SwiperSlider from "./SwiperSlider";

const Home = () => {
  const estates = useLoaderData();
  console.log(estates);
  useEffect(() => {
    document.title = "Majestic Mansion | Home";
  }, []);
  return (
    <div>
      <Marquee className="bg-[#212121] text-white py-1 font-mono">
        Unlock exclusive access to job opportunities curated by our expert
        agents. Log in now to explore your next career move in the real estate
        industry!
      </Marquee>
      <SwiperSlider/>

      <div className="pt-8  rounded-xl mx-12">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-2">
          Explore our properties
        </h1>
        <h1 className="text-sm text-center w-2/3 mx-auto mb-4 text-gray-700">
          Discover a world of possibilities as you explore our diverse range of
          properties. From cozy homes to luxurious estates, find your perfect
          match with us.
        </h1>
        <hr />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-3">
        {estates.map((estate) => (
          <Estate key={estate.id} estate={estate} />
        ))}
      </div>
    </div>
  );
};

export default Home;
