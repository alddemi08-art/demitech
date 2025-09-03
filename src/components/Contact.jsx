import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="mb-12 text-lg">We’re here to help! Reach out to us through any of the methods below.</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg flex flex-col items-center hover:bg-white/30 transition">
            <FaPhone size={40} className="text-white mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-white">+63 9150956367</p>
          </div>

          {/* Email */}
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg flex flex-col items-center hover:bg-white/30 transition">
            <FaEnvelope size={40} className="text-white mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-white">alddemi08@gmail.com</p>
          </div>

          {/* Address */}
          <div className="bg-white/20 p-6 rounded-2xl shadow-lg flex flex-col items-center hover:bg-white/30 transition">
            <FaMapMarkerAlt size={40} className="text-white mb-4"/>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-white">Calumpit, Bulacan, Philippines</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
