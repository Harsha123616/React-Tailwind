import React from "react";

function Mainbody() {
  return (
    <div className="bg-white">
      {/* Approdable Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content */}
            <div>
              <div className="w-16 h-1 bg-red-500 mb-6"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Approdable Packages
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
              <a
                href="#"
                className="group inline-flex items-center text-teal-600 font-semibold text-lg hover:text-teal-700 transition"
              >
                Learn More
                <i className="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
              </a>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Certified Teacher Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-comment text-teal-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Certified Teacher
                </h3>
                <div className="w-12 h-1 bg-red-500 mb-4"></div>
                <p className="text-gray-600 leading-relaxed">
                  The gradual accumulation of information about
                </p>
              </div>

              {/* Expert Instruction Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition duration-300">
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-graduation-cap text-teal-600 text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Expert Instruction
                </h3>
                <div className="w-12 h-1 bg-red-500 mb-4"></div>
                <p className="text-gray-600 leading-relaxed">
                  The gradual accumulation of information about
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mainbody;
