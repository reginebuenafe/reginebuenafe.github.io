import React from 'react';

function Skills() {
  const skills = ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Git'];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;