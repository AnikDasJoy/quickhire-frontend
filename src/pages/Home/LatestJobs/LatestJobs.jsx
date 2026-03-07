import React from "react";
import LatestJobsCard from "./LatestJobsCard";

import logo1 from "../../../assets/Company Logo1.png";
import logo2 from "../../../assets/Company Logo2.png";
import logo3 from "../../../assets/company2.png";
import logo4 from "../../../assets/Company Logo4.png";
import logo5 from "../../../assets/Company Logo5.png";
import logo6 from "../../../assets/Company Logo6.png";
import logo7 from "../../../assets/Company Logo7.png";
import logo8 from "../../../assets/Company Logo8.png";

const jobsData = [
  {
    title: "Social Media Assistant",
    company: "Nomad",
    location: "Paris, France",
    logo: logo1,
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    title: "Social Media Assistant",
    company: "Netlify",
    location: "Paris, France",
    logo: logo2,
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    title: "Brand Designer",
    company: "Dropbox",
    location: "San Fransisco, USA",
    logo: logo3,
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    title: "Brand Designer",
    company: "Maze",
    location: "San Fransisco, USA",
    logo: logo4,
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    title: "Interactive Developer",
    company: "Terraform",
    location: "Hamburg, Germany",
    logo: logo5,
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    title: "Interactive Developer",
    company: "Udacity",
    location: "Hamburg, Germany",
    logo: logo6,
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    title: "HR Manager",
    company: "Packer",
    location: "Lucern, Switzerland",
    logo: logo7,
    tags: ["Full-Time", "Marketing", "Design"],
  },
  {
    title: "HR Manager",
    company: "Webflow",
    location: "Lucern, Switzerland",
    logo: logo8,
    tags: ["Full-Time", "Marketing", "Design"],
  },
];

const LatestJobs = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold">
            Latest <span className="text-primary">jobs open</span>
          </h2>

          <button className="text-primary font-medium hover:underline">
            Show all jobs →
          </button>
        </div>

        {/* Jobs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {jobsData.map((job, index) => (
            <LatestJobsCard key={index} job={job} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestJobs;