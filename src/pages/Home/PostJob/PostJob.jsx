import React from 'react';

const PostJob = () => {
    return (
                 <section className="bg-gray-100 py-16">
              <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">
        
                {/* Left Content */}
                <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-12 overflow-hidden">

  {/* Diagonal Shape */}
  <div className="absolute top-0 left-0 w-0 h-0 border-t-[120px] border-r-[120px] border-t-white border-r-transparent"></div>

  <div className="relative z-10">

    <h1 className="text-5xl font-bold leading-tight pl-8">
      Start posting <br />
      jobs today
    </h1>

    <p className="mt-6 text-white/80 pl-8">
      Start posting jobs for only $10.
    </p>

    <button className="mt-8 bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transitions ml-6">
      Sign Up For Free
    </button>

  </div>


        
                  {/* <p className="mt-4 text-sm text-gray-400">
                    Popular : UI Designer, UX Researcher, Android, Admin
                  </p> */}
                </div>
        
                {/* Right Image */}
                <div className="flex justify-center">
                  {/* <img
                    src={dashboardImg}
                    alt="banner"
                    className="max-h-[450px] object-contain"
                  /> */}
                </div>
        
              </div>
            </section>
            );
};

export default PostJob;