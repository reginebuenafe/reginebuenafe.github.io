import React from 'react';

function Navbar() {
  return (
    <nav className="bg-[#0d1b2a] text-white p-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold ml-37">Regine Buenafe</h1>
        <div className="space-x-12">
          <a href="#about" className="hover:text-blue-200">About</a>
          <a href="#projects" className="hover:text-blue-200">Projects</a>
          <a href="#skills" className="hover:text-blue-200">Skills</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;