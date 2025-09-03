import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
    >
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-cyan-400 animate-fadeIn">
        DemiTech Solutions
      </h1>
      <p className="text-lg md:text-xl mb-8 text-gray-300 animate-fadeIn delay-200">
        Repair, Upgrade, and Protect Your Devices with Futuristic Precision
      </p>
      <a
        href="#services"
        className="px-8 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 animate-fadeIn delay-400"
      >
        Explore Services
      </a>
    </section>
  );
};

export default Hero;
