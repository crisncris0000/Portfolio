import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll spy to highlight active section
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 border-b-2 ${
        darkMode ? 'bg-[#0f0f0f] border-pink-500' : 'bg-white border-gray-300'
      } shadow-md font-mono`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className={`text-2xl tracking-widest ${darkMode ? 'text-pink-400' : 'text-gray-800'}`}>
          Chris<span className="text-white">/</span>Dev
        </span>

        <div className="flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleScroll(section.id)}
              className={`relative text-base transition duration-200 focus:outline-none ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              } ${
                activeSection === section.id ? 'text-pink-400 font-semibold' : ''
              }`}
            >
              {section.label}
              {/* Glowing underline */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-pink-400 shadow-[0_0_10px_2px_rgba(236,72,153,0.6)]'
                    : 'bg-transparent'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="focus:outline-none"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21.752 15.002A9.718 9.718 0 0112 21.75a9.75 9.75 0 01-9.75-9.75c0-4.136 2.664-7.626 6.398-9.093a.75.75 0 01.846 1.279A7.5 7.5 0 0012 19.5a7.48 7.48 0 006.314-3.404.75.75 0 01.954-.062.75.75 0 01.325.968z"
              />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 3v1.5M12 19.5V21M4.219 4.219l1.061 1.061M17.657 17.657l1.061 1.061M3 12h1.5M19.5 12H21M4.219 19.781l1.061-1.061M17.657 6.343l1.061-1.061M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
}
