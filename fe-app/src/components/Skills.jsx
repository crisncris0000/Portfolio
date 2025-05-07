import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiMysql,
  SiSpring,
  SiDocker,
  SiGit,
  SiGo,
} from 'react-icons/si';
import { FaJava, FaCode } from 'react-icons/fa';

const skills = [
  { name: 'Java', icon: <FaJava className="text-red-500" /> },
  { name: 'C#', icon: <FaCode className="text-purple-400" /> },
  { name: 'Go', icon: <SiGo className="text-sky-400" /> },
  { name: 'Git', icon: <SiGit className="text-orange-500" /> },
  { name: 'Docker', icon: <SiDocker className="text-blue-400" /> },
  { name: 'Spring', icon: <SiSpring className="text-green-500" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600" /> },
  { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'ReactJS', icon: <SiReact className="text-cyan-400" /> },
  { name: 'NodeJS', icon: <SiNodedotjs className="text-green-400" /> },
  { name: 'ExpressJS', icon: <SiExpress className="text-gray-300" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-black text-white px-6 py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 border-b-4 border-white inline-block">
          Skills
        </h2>
        <div className="mt-12 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 px-2 w-max">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="min-w-[140px] bg-gray-900 border-4 border-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 ease-in-out"
                style={{
                  backgroundImage:
                    'radial-gradient(#444 1px, transparent 1px), radial-gradient(#444 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                  backgroundPosition: '0 0, 5px 5px',
                }}
              >
                <div className="text-4xl mb-2">{skill.icon}</div>
                <p className="font-semibold text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
