import React from "react";

function Down() {
  return (
    <div className="bg-[#FDF3F1] py-20">
      <div className="text-center mb-12">
        <p className="text-gray-500 text-sm uppercase tracking-wide mb-2">Newsletter</p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Watch our Courses</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          placeholder="Your Email"
          className="flex-1 px-5 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Down;
