import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#FDF3F1]">
      <nav className="flex items-center justify-between px-8 py-4 bg-[#FDF3F1] shadow">
        <div className="text-xl font-bold text-gray-900">
          Brandname
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-green-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Product</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Pricing</a>
          <a href="#" className="text-gray-700 hover:text-green-600">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-green-600">Login</a>
          <a
            href="#"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-medium transition"
          >
            JOIN US
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

