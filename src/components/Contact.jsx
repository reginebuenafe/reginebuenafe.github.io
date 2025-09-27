import React from 'react';

function Contact() {
  return (
    <footer id="contact" 
    className="bg-[#1b263b] text-[#e0e1dd] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-[#778da9] mb-2">Regine Buenafe</h2>
          <p className="text-sm text-gray-300">Web Developer</p>
        </div>

        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <p className="text-gray-300">
            <a 
              href="mailto:rchristianbuenafe@gmail.com" 
              className="text-[#778da9]"
            >
              rchristianbuenafe@gmail.com
            </a>
          </p>
          <div className="mt-2 space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#778da9]"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/reginebuenafe" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#778da9]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Regine Buenafe. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;
