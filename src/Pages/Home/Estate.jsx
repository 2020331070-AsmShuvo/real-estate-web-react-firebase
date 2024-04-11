import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { GiHomeGarage } from "react-icons/gi";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Estate = ({ estate }) => {
  const {
    id,
    estate_title,
    image,
    segment_name,
    description,
    location,
    area,
    status,
    price,
  } = estate;

  return (
    <div className="p-2 m-2 mx-auto">
      <div className="card glass card-compact w-[400px] h-[700px] bg-gray-100 shadow-[#a6886d] shadow-2xl">
        <figure>
          <img src={image} className="p-6 w-full h-80" alt="card-images" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold  text-2xl text-gray-600">
            {estate_title}
          </h2>
          <p className="text-amber-700">{segment_name}</p>
          <p className="text-gray-500">{description}</p>
          <div className="flex justify-between items-center">
            <p className="text-amber-900 flex items-center gap-2">
              <IoLocationSharp /> {location}
            </p>
            <p className=" flex items-center gap-2">
              <GiHomeGarage />
              {area}
            </p>
            <p className="text-red-700 font-semibold">For {status}</p>
          </div>
          <p className="text-blue-700 font-semibold">{price}</p>
          <div className="card-actions justify-end">
            <Link to={`/estate/${id}`}>
            <button className="btn btn-outline btn-success w-full flex items-center gap-2">
              View Property <FaArrowCircleRight />
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
