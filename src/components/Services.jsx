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
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black/40 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-cyan-500/50 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-4 text-4xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">
                Professional {service.title.toLowerCase()} for home & business users.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
