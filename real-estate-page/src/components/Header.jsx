import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header.jpg')" }}
      id="Header"
    >
      <Navbar />

      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2>Explore home !!</h2>
        <div>
          <a href="">Projects</a>
          <a href="">Contact us</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
