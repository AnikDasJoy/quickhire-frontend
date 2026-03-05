import React from "react";
import CategoryCard from "./CategoryCard";
import designIcon from "../../../assets/DesignIcon.png";
import salesIcon from "../../../assets/SalesIcon.png";
import marketingIcon from "../../../assets/MarketingIcon.png";
import financeIcon from "../../../assets/FinanceIcon.png";
import technologyIcon from "../../../assets/TechnologyIcon.png";
import engineeringIcon from "../../../assets/EngineeringIcon.png";
import businessIcon from "../../../assets/BusinessIcon.png";
import hrIcon from "../../../assets/ResourceIcon.png";


const categoryData = [
  { title: "Design", jobs: 235, icon: designIcon },
  { title: "Sales", jobs: 756, icon: salesIcon },
  { title: "Marketing", jobs: 140, icon: marketingIcon, highlight: true },
  { title: "Finance", jobs: 325, icon: financeIcon},
  { title: "Technology", jobs: 436, icon: technologyIcon },
  { title: "Engineering", jobs: 542, icon: engineeringIcon },
  { title: "Business", jobs: 211, icon: businessIcon },
  { title: "Human Resource", jobs: 346, icon: hrIcon },
];

const Category = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            Explore by <span className="text-primary">category</span>
          </h2>

          <button className="text-primary font-medium hover:underline">
            Show all jobs →
          </button>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryData.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Category;