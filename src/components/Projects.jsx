import React from 'react';

function Projects() {
  const projects = [
    { 
      title: 'Project One', 
      description: 'A web application built with React and Tailwind CSS.', 
      link: '#' 
    },
    { 
      title: 'Project Two', 
      description: 'A full-stack app with Node.js and MongoDB.', 
      link: '#' 
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border border-blue-200 p-6 rounded-lg hover:shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a 
              href={project.link} 
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;