import React from "react";
import { FaLaptop, FaShieldVirus, FaTools, FaBatteryFull, FaDatabase, FaKeyboard } from "react-icons/fa";

const services = [
  { title: "Computer Repair", icon: <FaLaptop /> },
  { title: "OS Installation", icon: <FaTools /> },
  { title: "Virus Removal", icon: <FaShieldVirus /> },
  { title: "Computer Upgrade", icon: <FaLaptop /> },
  { title: "Computer Consultant", icon: <FaTools /> },
  { title: "Battery & Charging Issues", icon: <FaBatteryFull /> },
  { title: "Update or Install Software", icon: <FaTools /> },
  { title: "Data Recovery & Backup", icon: <FaDatabase /> },
  { title: "Virus & Software Solutions", icon: <FaShieldVirus /> },
  { title: "Quick Diagnostics & Repairs", icon: <FaTools /> },
  { title: "Screen & Keyboard Replacement", icon: <FaKeyboard /> },
];

const Services = () => {
  return (
    <section id="services" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute w-full h-full top-0 left-0 pointer-events-none">
        <div className="absolute bg-cyan-400 rounded-full w-1.5 h-1.5 animate-[float_12s_linear_infinite] top-10 left-20"></div>
        <div className="absolute bg-cyan-400 rounded-full w-2 h-2 animate-[float2_14s_linear_infinite] top-40 left-60"></div>
        <div className="absolute bg-cyan-400 rounded-full w-1 h-1 animate-[float3_16s_linear_infinite] top-60 left-80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 drop-shadow-[0_0_10px_cyan] animate-fadeIn">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/30 backdrop-blur-md p-6 rounded-3xl shadow-lg flex flex-col items-center hover:shadow-cyan-500/70 transform hover:-translate-y-2 transition-all duration-300 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-cyan-400 mb-4 text-4xl hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_15px_cyan]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm">
                Professional {service.title.toLowerCase()} for home & business users.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 1s forwards; }

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

export default Services;
