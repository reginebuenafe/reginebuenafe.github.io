import React from 'react';

function Skills() {
  const skills = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Tailwind CSS', logo: '/tailwindcss-mark.d52e9897.svg' },
    { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' },
    { name: 'Java', logo: '/Java.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  ];

  return (
    <section id="skills" className="py-30 scroll-mt-30 sm:scroll-mt-15 lg:scroll-mt-1">
      <h2 className="text-4xl text-[#778da9] font-bold mb-10">Skills</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center bg-[#1b263b] shadow-md border-4 border-[#151d2d] rounded-xl p-6 hover:shadow-lg transition-transform hover:-translate-y-2"
          >
            <img 
              src={skill.logo} 
              alt={skill.name} 
              className="w-12 h-12 mb-4"
            />
            <span className="text-lg font-semibold text-[#e0e1dd]">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
