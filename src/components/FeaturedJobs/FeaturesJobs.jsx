import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturesJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="my-20">
      <div className="text-center mb-14">
        <h2 className="text-5xl mb-6 font-bold">Featured Jobs </h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {jobs.map((job) => (
          <Job key={job.id} job={job}>
            {" "}
          </Job>
        ))}
      </div>
    </div>
  );
};

export default FeaturesJobs;
