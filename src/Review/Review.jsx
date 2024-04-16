import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Review = (props) => {
  const { title, clientName, designation } = props;
  return (
    <div className="md:w-80 mx-auto space-y-3 shadow-xl  p-4">
      <div className="text-xl">
        <FaQuoteLeft />
      </div>
      <p className="font-semibold">{title}</p>
      <hr />
      <p className="">{clientName}</p>
      <p className="">{designation}</p>
    </div>
  );
};

export default Review;
