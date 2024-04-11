import React from "react";
import { useParams, useLoaderData } from "react-router-dom";

const EstateDetails = () => {
  const { id } = useParams();
  //   console.log("id=", id);
  const estates = useLoaderData();
  //   console.log("in EstateDetails: ", estates);
  let estate = null;
  for (let i = 0; i < estates.length; i++) {
    if (estates[i].id == id) {
      // console.log("found")
      estate = estates[i];
      break;
    }
  }
  console.log("Estate with id: ", estate);

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = estate;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="min-h-screen flex justify-center items-center"
    >
      <div className="w-1/2">
        <img src={image} className="w-[600px] bg-[#ffffff20] rounded-lg ml-4 h-[500px] p-4 " />
      </div>
      <div className="w-1/2 mr-4 text-gray-100 space-y-4 bg-[#6c2c2c76] h-[500px] p-4 rounded-md">
        <p className="text-3xl font-bold text-gray-300 phil my-3 border-b">{estate_title}</p>
        <p className="text-xl text-emerald-500 jul font-semibold">{segment_name}</p>
        <p className="text-lg text-gray-200 ">{description}</p>
        <p className="text-3xl text-blue-500">{price}</p>
        <p className="text-lg text-primary">For {status}</p>
        <p className="text-sm text-amber-400">Area: {area}</p>
        <p className="text-info">{location}</p>
        <p className="">{
            facilities.map(it=><p className="text-gray-400">{it}</p>)
        }</p>
      </div>
    </div>
  );
};

export default EstateDetails;
