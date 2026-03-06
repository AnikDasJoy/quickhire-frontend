import React from "react";

const FeaturedJobCard = ({ job }) => {
  const { title, company, location, type, description, logo, tags } = job;

  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white">

      {/* Top */}
      <div className="flex justify-between items-start mb-4">
        <img src={logo} alt={company} className="w-10 h-10" />

        <span className="text-xs border border-primary text-primary px-3 py-1 rounded">
          {type}
        </span>
      </div>

      {/* Job Title */}
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>

      {/* Company */}
      <p className="text-sm text-gray-500 mt-1">
        {company} • {location}
      </p>

      {/* Description */}
      <p className="text-sm text-gray-500 mt-3 line-clamp-2">
        {description}
      </p>

      {/* Tags */}
      <div className="flex gap-2 mt-4 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
};

export default FeaturedJobCard;