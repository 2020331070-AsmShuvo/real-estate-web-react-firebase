import React from "react";
import error from "../../../public/error.png";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className=" bg-[#FF991F] min-h-screen">
      <img src={error} className="w-full md:h-[800px]" alt="404 NOT FOUND" />
      <div className="text-center mx-auto">
      <Link to="/">
        <button className="btn md:bottom-64 mx-auto  btn-primary ">GO TO HOME</button>
      </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
