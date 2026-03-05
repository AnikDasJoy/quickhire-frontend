import React from 'react';
import dashboardImg from "../../../assets/dashboardLogo.png";

const Banner = () => {
    return (
             <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
    
            {/* Left Content */}
            <div>
              <h1 className="text-5xl font-bold text-gray-800 leading-tight">
                Discover <br />
                more than <br />
                <span className="text-blue-500">5000+ Jobs</span>
              </h1>
    
              <p className="mt-6 text-gray-500">
                Great platform for the job seeker that searching for new career
                heights and passionate about startups.
              </p>
    
              {/* Search Box */}
              <div className="mt-8 flex bg-white shadow-md p-2 rounded-md w-full max-w-md">
    
                <input
                  type="text"
                  placeholder="Job title or keyword"
                  className="flex-1 outline-none px-3"
                />
    
                <input
                  type="text"
                  placeholder="Location"
                  className="flex-1 outline-none px-3 border-l"
                />
    
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-md">
                  Search my job
                </button>
    
              </div>
    
              <p className="mt-4 text-sm text-gray-400">
                Popular : UI Designer, UX Researcher, Android, Admin
              </p>
            </div>
    
            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={dashboardImg}
                alt="banner"
                className="max-h-[450px] object-contain"
              />
            </div>
    
          </div>
        </section>
        );
};

export default Banner;