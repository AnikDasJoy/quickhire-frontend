import React from "react";
import FeaturedJobCard from "./FeaturedJobCard";

import company1 from "../../../assets/company1.png";
import company2 from "../../../assets/company2.png";
import company3 from "../../../assets/company3.png";
import company4 from "../../../assets/company4.png";
import company5 from "../../../assets/company5.png";
import company6 from "../../../assets/company6.png";
import company7 from "../../../assets/company7.png"; 
import company8 from "../../../assets/company8.png"; 

const jobsData = [
  {
    title: "Email Marketing",
    company: "Revolut",
    location: "Madrid, Spain",
    type: "Full Time",
    description: "Revolut is looking for Email Marketing to help team...",
    logo: company1,
    tags: ["Marketing", "Design"],
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Francisco, US",
    type: "Full Time",
    description: "Dropbox is looking for Brand Designer to help team...",
    logo: company2,
    tags: ["Design", "Business"],
  },
  
  {
    title: "Email Marketing",
    company: "Pitch",
    location: "Berlin, Germany",
    type: "Full Time",
    description: "Pitch is looking for Customer manager to join marketing...",
    logo: company3,
    tags: ["Marketing"],
  },
  {
    title: "Visual Designer",
    company: "Blinklist",
    location: "Granada, Spain",
    type: "Full Time",
    description: "Blinklist is looking for Visual Designer to help team...",
    logo: company4,
    tags: ["Design"],
  },
  {
    title: "Product Designer",
    company: "ClassPass",
    location: "Manchester, UK",
    type: "Full Time",
    description: "ClassPass is looking for Product Designer to help team...",
    logo: company5,
    tags: ["Marketing", "Design"],
  },
  {
    title: "Lead Designer",
    company: "Canva",
    location: "Ontario, Canada",
    type: "Full Time",
    description: "Canva is looking for Lead Engineer to help develop...",
    logo: company6,
    tags: ["Design", "Business"],
  },
  {
    title: "Brand Strategist",
    company: "GoDaddy",
    location: "Marseille, France",
    type: "Full Time",
    description: "GoDaddy is looking for Brand Strategist to join the team...",
    logo: company7,
    tags: ["Marketing"],
  },
  {
    title: "Data Analyst",
    company: "Twitter",
    location: "San Diego, US",
    type: "Full Time",
    description: "Twitter is looking for Data Analyst to help team desi...",
    logo: company8,
    tags: ["Technology"],
  },
];

const FeaturedJobs = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            Featured <span className="text-primary">jobs</span>
          </h2>

          <button className="text-primary font-medium hover:underline">
            Show all jobs →
          </button>
        </div>

        {/* Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobsData.map((job, index) => (
            <FeaturedJobCard key={index} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedJobs;