import React from "react";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-cyan-500/30">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <p>&copy; 2025 DemiTech. All rights reserved.</p>
        <a
          href="https://www.facebook.com/share/1Cs6dYULZE/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white transition"
        >
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
