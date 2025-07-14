import React from "react";
function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px20">
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Home
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#Header" className="cursor-pointer hover:text-gray-400">
            feedback
          </a>
        </ul>
        <button className="hiddin md:block bg-white px-8 py-2 rounded-full">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
