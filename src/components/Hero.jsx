import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 flex flex-col justify-center items-center text-center text-white relative overflow-hidden"
    >
      {/* Floating "particles" using Tailwind and pseudo-elements */}
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute bg-cyan-400 rounded-full w-2 h-2 animate-[float_10s_linear_infinite] top-10 left-20"></div>
        <div className="absolute bg-cyan-400 rounded-full w-1.5 h-1.5 animate-[float2_12s_linear_infinite] top-40 left-60"></div>
        <div className="absolute bg-cyan-400 rounded-full w-1 h-1 animate-[float3_14s_linear_infinite] top-60 left-80"></div>
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-cyan-400 drop-shadow-[0_0_10px_cyan] animate-fadeIn">
        DemiTech Solutions
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl mb-8 text-gray-300 drop-shadow-[0_0_8px_cyan] animate-fadeIn delay-200">
        Repair, Upgrade, and Protect Your Devices with Futuristic Precision
      </p>

      {/* Call-to-action */}
      <a
        href="#services"
        className="px-10 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_cyan] hover:shadow-[0_0_30px_cyan] animate-fadeIn delay-400"
      >
        Explore Services
      </a>

      {/* Tailwind custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s forwards; }
        .animate-fadeIn.delay-200 { animation-delay: 0.2s; }
        .animate-fadeIn.delay-400 { animation-delay: 0.4s; }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); opacity: 0.7; }
          50% { transform: translate(200px, 150px); opacity: 0.3; }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0); opacity: 0.7; }
          50% { transform: translate(-150px, 200px); opacity: 0.3; }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); opacity: 0.7; }
          50% { transform: translate(100px, -180px); opacity: 0.3; }
        }
        .animate-[float_10s_linear_infinite] { animation: float 10s linear infinite; }
        .animate-[float2_12s_linear_infinite] { animation: float2 12s linear infinite; }
        .animate-[float3_14s_linear_infinite] { animation: float3 14s linear infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
