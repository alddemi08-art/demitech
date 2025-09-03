import React from "react";
import { FaPhone, FaEnvelope, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-cyan-400">Contact Us</h2>
        <p className="mb-12 text-gray-300 text-lg">
          Reach out to us for futuristic tech solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Phone */}
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-cyan-500/50 transition-all duration-300">
            <FaPhone size={40} className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p>+63 9150956367</p>
          </div>

          {/* Email */}
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-cyan-500/50 transition-all duration-300">
            <FaEnvelope size={40} className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p>alddemi08.com</p>
          </div>

          {/* Facebook */}
          <div className="bg-black/40 backdrop-blur-md p-6 rounded-2xl shadow-lg flex flex-col items-center hover:shadow-cyan-500/50 transition-all duration-300">
            <FaFacebookF size={40} className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Facebook</h3>
            <a
              href="https://www.facebook.com/share/1Cs6dYULZE/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white transition"
            >
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
