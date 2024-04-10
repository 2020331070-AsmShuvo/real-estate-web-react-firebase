import React from "react";

const Estate = ({ estate }) => {
  const { estate_title, image, segment_name,description, location, area, status, price  } = estate;

  return (
    <div className="p-2 m-2 mx-auto">
      <div className="card glass card-compact w-[500px] h-[700px] bg-gray-100 shadow-2xl">
        <figure>
          <img
            src={image}
            className="p-6 w-full h-96"
            alt="card-images"
          />
          
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold  text-2xl text-gray-600">{estate_title}</h2>
          <p className="text-amber-700">{segment_name}</p>
          <p className="text-gray-500">{description}</p>
          <div className="flex justify-between items-center">
            <p className="">{location}</p>
            <p className="">{area}</p>
            <p className="">For {status}</p>
          </div>
          <p className="text-blue-700 font-semibold">{price}</p>
          <div className="card-actions justify-end">
          <button className="btn btn-outline btn-success w-full">View Property</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;


