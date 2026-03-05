import React from "react";

const CategoryCard = ({ category }) => {
  const { title, jobs, icon, highlight } = category;

  return (
    <div
      className={`p-6 border rounded-lg transition-all duration-300 cursor-pointer
      ${highlight ? "bg-primary text-white" : "bg-base-200 hover:bg-primary hover:text-white"}`}
    >
      
      {/* Image Icon */}
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 mb-6"
      />

      <h3 className="text-lg font-semibold mb-2">{title}</h3>

      <div className="flex justify-between items-center text-sm opacity-80">
        <span>{jobs} jobs available</span>
        <span>→</span>
      </div>

    </div>
  );
};

export default CategoryCard;