// import PropTypes from "prop-types";

import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  console.log(job);
  return (
    <div className="container  mx-auto my-20">
      <div className="grid grid-cols-4 gap-20">
        <div className="col-span-3">
          <p className="pb-10">
            <b>Job Description:</b> {job_description}
          </p>
          <p>
            <b>Job Responsibility:</b> {job_responsibility}
          </p>
          <p className="py-10">
            <b>Educational Requirements:</b>
            <br />
            <br />
            {educational_requirements}
          </p>
          <p>
            <b>Experiences:</b>
            <br />
            <br />
            {experiences}
          </p>
        </div>
        <div className="col-span-1">
          <div className="bg-slate-300 p-6 rounded-md">
            <p className="text-xl font-bold mb-5">Job Details</p>
            <hr />
            <p className="py-5">
              <b>Salary :</b> {salary}
            </p>
            <p>
              <b>Job Title :</b> {job_title}
            </p>
            <p className="text-xl font-bold mb-5">Contact Information</p>
            <hr />
            <p className="py-5">
              <b>Phone :</b> {contact_information.phone}
            </p>
            <p className="py-5">
              <b>Email :</b> {contact_information.email}
            </p>
            <p className="py-5">
              <b>Address :</b> {contact_information.address}
            </p>

            <button className="btn btn-primary">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

JobDetails.propTypes = {};

export default JobDetails;
