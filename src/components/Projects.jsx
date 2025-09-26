import React from 'react';

function Projects() {
  // const projects = [
  //   { 
  //     title: 'Project One', 
  //     description: 'A web application built with React and Tailwind CSS.', 
  //     link: '#' 
  //   },
    
  // ];

  return (
    <section id="projects" className="py-27 mt-45 mb-20">

      <h2 className="text-4xl text-[#778da9] font-bold mb-48">Projects</h2>

      <div className="relative align-middle">

        <div className="absolute -top-15 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#778da9] to-transparent"></div>

        <h2 className="text-6xl text-[#e0e1dd] font-bold mb-12 text-center">
          Coming Soon hehe...
        </h2>

        <div className="absolute -bottom-15 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#778da9] to-transparent"></div>

        </div>

      {/* <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index} className="border border-blue-200 p-6 rounded-lg hover:shadow-lg">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a 
              href={project.link} 
              className="mt-4 inline-block text-blue-600 hover:underline"6
            >
              View Project
            </a>
          </div>
        ))}
      </div> */}
    </section>
  );
}

export default Projects;