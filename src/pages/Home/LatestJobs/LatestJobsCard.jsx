import React from "react";

const LatestJobsCard = ({ job }) => {
  const { title, company, location, logo, tags } = job;

  const getTagStyle = (tag) => {
  switch (tag) {
    case "Full-Time":
      return "border-green-500 text-green-500";
    case "Marketing":
      return "border-orange-500 text-orange-500";
    case "Design":
      return "border-purple-500 text-purple-500";
    default:
      return "border-gray-400 text-gray-500";
  }
};

  return (
    <div className="flex items-center gap-4 p-5 border rounded-lg hover:shadow-lg transition duration-300 bg-white">

      {/* Logo */}
      <img
        src={logo}
        alt={company}
        className="w-12 h-12 object-contain"
      />

      {/* Job Info */}
      <div className="flex-1">

        <h3 className="font-semibold text-lg text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-500">
          {company} • {location}
        </p>

        {/* Tags */}
        <div className="flex gap-2 mt-2 flex-wrap">
  {tags.map((tag, i) => (
    <span
      key={i}
      className={`text-xs px-3 py-1 rounded-full border font-medium ${getTagStyle(tag)}`}
    >
      {tag}
    </span>
  ))}
</div>  

      </div>

    </div>
  );
};

export default LatestJobsCard;