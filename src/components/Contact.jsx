import React from "react";
import { FaPhone, FaEnvelope, FaFacebookF } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-gray-900 text-white overflow-hidden">
      {/* Floating particles */}
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute bg-cyan-400 rounded-full w-1.5 h-1.5 animate-[float_12s_linear_infinite] top-10 left-20"></div>
        <div className="absolute bg-cyan-400 rounded-full w-2 h-2 animate-[float2_14s_linear_infinite] top-40 left-60"></div>
        <div className="absolute bg-cyan-400 rounded-full w-1 h-1 animate-[float3_16s_linear_infinite] top-60 left-80"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400 drop-shadow-[0_0_10px_cyan] animate-fadeIn">
          Contact Us
        </h2>
        <p className="mb-12 text-gray-300 text-lg md:text-xl drop-shadow-[0_0_6px_cyan] animate-fadeIn delay-200">
          Reach out to us for futuristic tech solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 animate-fadeIn">
            <FaPhone className="text-cyan-400 mb-4 text-4xl hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_cyan]" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+63 9150956367</p>
          </div>

          {/* Email */}
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 animate-fadeIn delay-200">
            <FaEnvelope className="text-cyan-400 mb-4 text-4xl hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_cyan]" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>alddemi08@gmail.com</p>
          </div>

          {/* Facebook */}
          <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-cyan-500/70 hover:scale-105 transition-all duration-300 animate-fadeIn delay-400">
            <FaFacebookF className="text-cyan-400 mb-4 text-4xl hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_cyan]" />
            <h3 className="text-xl font-semibold mb-2">Facebook</h3>
            <a
              href="https://www.facebook.com/share/1Cs6dYULZE/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white transition-colors"
            >
              Follow Us
            </a>
          </div>
        </div>
      </div>

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
        .animate-[float_12s_linear_infinite] { animation: float 12s linear infinite; }
        .animate-[float2_14s_linear_infinite] { animation: float2 14s linear infinite; }
        .animate-[float3_16s_linear_infinite] { animation: float3 16s linear infinite; }
      `}</style>
    </section>
  );
};

export default Contact;
