import React, { useEffect } from "react";
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
  useEffect(() => {
    document.title = "Majestic Mansion | Estate Details";
  }, []);
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
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center gap-8"
    >
      <div className="lg:w-1/2 flex items-center justify-center ">
        <img
          src={image}
          className="w-80 md:w-2/3 lg:w-[600px] bg-[#ffffff20] rounded-lg lg:ml-4 lg:h-[500px] p-4 "
        />
      </div>
      <div className=" w-80 md:w-2/3 lg:w-1/2 lg:mr-4 text-gray-50 space-y-3 bg-[#6c2c2c76] lg:h-[500px] p-4 rounded-md">
        <p className="text-3xl font-bold text-gray-300 phil my-3 border-b">
          {estate_title}
        </p>
        <p className="text-lg text-emerald-500 jul font-semibold">
          {segment_name}
        </p>
        <p className="text-md text-gray-300 ">{description}</p>
        <p className="text-3xl text-blue-500">{price}</p>
        <p className="text-lg text-primary">For {status}</p>
        <p className="text-lg text-amber-400">Area: {area}</p>
        <p className="text-rose-300">{location}</p>
        <p className="text-sm">
          {facilities.map((it) => (
            <p className="text-info">* {it}</p>
          ))}
        </p>
      </div>
    </div>
  );
};

export default EstateDetails;
