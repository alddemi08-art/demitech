import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Home", to: "hero" },
    { name: "Services", to: "services" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-black/40 backdrop-blur-lg z-50 shadow-md border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-cyan-400 tracking-widest">DemiTech</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-200 font-semibold">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth={true}
                duration={800} // animation duration in ms
                className="hover:text-cyan-400 cursor-pointer transition-all duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden flex flex-col cursor-pointer space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`w-6 h-0.5 bg-gray-200 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-gray-200 transition-all ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`w-6 h-0.5 bg-gray-200 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/70 backdrop-blur-lg shadow-lg w-full px-6 py-4 absolute top-full left-0 flex flex-col space-y-4 border-t border-cyan-500/30">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={800}
              className="text-gray-200 font-semibold hover:text-cyan-400 cursor-pointer transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
