import React from "react";
import joblogo from "../../../public/jobs.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { IoPeopleOutline } from "react-icons/io5";

const Job = ({ job }) => {
  const { job_title, job_location, job_description, salary, applied } = job;

  return (
    <div className="mx-auto">
      <div className="card mx-auto my-8 md:w-[900px] border rounded-none">
        <div className="card-body">
          <div className="flex items-center gap-4">
            <img src={joblogo} className="w-20" />
            <div>
              <h2 className="card-title jul text-gray-800">{job_title}</h2>
              <h2 className="text-green-500">{job_location}</h2>
            </div>
          </div>
          <p className="text-gray-500 font-sans ">{job_description}</p>
          <hr className="my-4" />
          <div className="card-actions justify-between">
            <div className="flex gap-4">
              <div className="">
                <div className="flex items-center font-semibold gap-2">
                  <BiSolidBadgeDollar className="text-2xl text-success" />{" "}
                  {salary} <span className="font-light mr-4">/yr</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <IoPeopleOutline className="text-2xl text-success" />{" "}
                  <span className="font-semibold text-xl">{applied}</span>{" "}
                  People Applied
                </div>
              </div>
            </div>
            <button className="btn text-success btn-outline outline-none border-none text-3xl w-24 rounded-none ">
              <FaArrowAltCircleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
