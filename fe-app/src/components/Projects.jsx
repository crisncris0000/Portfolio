import React from 'react';
import mckcreation from '../assets/Mckcreation.png';
import jumpSideDash from '../assets/JumpSideDash.png';
import minesweep from '../assets/MineSweep.png';
import agentRun from '../assets/AgentRun.png'

const projects = [
  {
    title: 'Mckcreation',
    description: 'A fully-functional e-commerce web application built with ReactJS and NodeJS.',
    techStack: ['Java', 'Spring Boot', 'PostgreSQL', 'ReactJS', 'JavaScript'],
    link: 'https://github.com/crisncris0000/Mckcreation',
    screenshot: mckcreation,
  },
  {
    title: 'Jump Side Dash!',
    description: 'In this game, the user is a square-shaped player who has only one ability... which is to jump! The user will jump its way to the finish and keep going, reaching new levels.',
    techStack: ['Unity', 'C#'],
    link: 'https://phillipb9345.itch.io/jump-side-dash',
    screenshot: jumpSideDash,
  },
  {
    title: 'MineSweep',
    description: 'A clone of the classic Minesweeper game built with JavaScript and HTML5.',
    techStack: ['Java'],
    link: 'https://github.com/your-username/minesweeper',
    screenshot: minesweep,
  },
  {
    title: 'Agent Run',
    description: 'A game where the user will have to avoid certain obstacles to reach the end of the level!',
    techStack: ['Unity', 'C#'],
    link: 'https://crisncris0000.itch.io/agent-run',
    screenshot: agentRun,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-white inline-block">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border-4 border-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-between transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-black w-full max-w-lg" // Adjusted to max-w-lg for wider cards
            >
              <img
                src={project.screenshot}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-3xl font-semibold mb-3">{project.title}</h3>
              <p className="text-base text-gray-300 mb-6">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-500 bg-gray-700 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-lg"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;