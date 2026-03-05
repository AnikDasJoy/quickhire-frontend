// src/components/brands/brandsData.js
import React from "react";
import Marquee from "react-fast-marquee";

import amazon from "../../../assets/brands/vodafone-2017-logo.png";
import amazon_vector from "../../../assets/brands/intel-3.png";
import casio from "../../../assets/brands/tesla-9 1.png";
import randstad from "../../../assets/brands/amd-logo-1.png";
import star from "../../../assets/brands/talkit 1.png";


const logos = [
  amazon,
  amazon_vector,
  casio,
  randstad,
  star
];

const ClientLogosMarquee = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Trusted By
          </h2>
          <p className="text-gray-600">
            Companies that rely on our delivery services
          </p>
        </div>

        {/* Marquee */}
        <Marquee
        className="bg-white"
          speed={50}
          gradient={false}
          pauseOnHover={true}
          direction="left"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-24 flex items-center"
            >
              <img
                src={logo}
                alt="Client Logo"
                className="h-6 object-contain opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientLogosMarquee;
// src/pages/Home/ClientLogosMarquee/ClientLogosMarquee.jsx