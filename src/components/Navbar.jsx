import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Smoothly close menu after clicking
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0d1b2a] text-white p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold md:ml-20 ml-4">
          <a href="#home">Regine Buenafe</a>
        </h1>


        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12 mr-15">
          <a href="#about" className="hover:text-blue-200 transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-blue-200 transition-colors duration-300">Projects</a>
          <a href="#skills" className="hover:text-blue-200 transition-colors duration-300">Skills</a>
          <a href="#contact" className="hover:text-blue-200 transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-4 text-center">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className="hover:text-blue-200 transition-colors duration-300 transform hover:scale-105 active:scale-95"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
