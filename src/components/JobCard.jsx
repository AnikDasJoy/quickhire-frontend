import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-gray-800">
        {job.title}
      </h2>

      <p className="text-gray-600 mt-1">{job.company}</p>

      <div className="flex justify-between mt-3 text-sm text-gray-500">
        <span>{job.location}</span>
        <span>{job.category}</span>
      </div>

      <Link
        to={`/jobs/${job._id}`}
        className="inline-block mt-4 text-blue-600 font-medium hover:underline"
      >
        View Details →
      </Link>
    </div>
  );
};

export default JobCard;