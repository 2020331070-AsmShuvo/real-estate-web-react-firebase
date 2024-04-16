import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Job from "./Job";

const JobOffers = () => {
  useEffect(() => {
    document.title = "Majestic Mansion | Job Offers";
  }, []);
  const jobs = useLoaderData();
  return (
    <div className="min-h-screen animate__animated animate__headShake">
      {jobs.map((job) => (
        <Job job={job} />
      ))}
    </div>
  );
};

export default JobOffers;
