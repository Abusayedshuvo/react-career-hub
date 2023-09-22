import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Jobs = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="border rounded-md p-10">
      <img src={logo} alt="" />
      <p className="text-2xl font-bold my-3">{job_title} </p>
      <p className="text-2xl mb-5">{company_name} </p>
      <div className="flex">
        <button className="btn btn-outline btn-primary me-6">
          {remote_or_onsite}
        </button>
        <button className="btn btn-outline btn-primary">{job_type}</button>
      </div>
      <div className="flex gap-6">
        <p className="text-xl flex items-center py-4">
          <CiLocationOn /> <span className="ps-2"> {location} </span>
        </p>

        <p className="text-xl flex items-center py-4">
          <AiOutlineDollarCircle />
          <span className="ps-2">{salary}</span>
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <button className="btn btn-primary">View Details</button>
      </Link>
    </div>
  );
};

Jobs.propTypes = {
  job: PropTypes.object,
};

export default Jobs;
