import React from "react";
import heroImage from "../assets/hero-cover-1.png"; // Make sure this path is correct

function Body() {
  return (
    <div className="bg-[#FDF3F1] py-16 px-12">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-xl">
          <span className="text-green-400 font-semibold text-lg mb-2 block">
            Welcome
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Best Learning <br /> Opportunities
          </h1>

          <p className="text-gray-500 text-lg mb-8">
            Our goal is to make online education work for everyone
          </p>

          <div className="flex space-x-4">
            <button className="bg-green-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-500 transition duration-300">
              Join Us
            </button>
            <button className="border border-green-400 text-green-400 font-semibold py-3 px-6 rounded-lg hover:bg-green-50 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <img
            src={heroImage} // Imported image
            alt="Learning Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
