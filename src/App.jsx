import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home'

function App() {
  return (
    <div className="min-h-screen bg-[#1b263b] text-[#1b263b]-800">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;