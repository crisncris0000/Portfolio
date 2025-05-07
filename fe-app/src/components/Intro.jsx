import React from 'react';

const Intro = () => {
  return (
    <div className="w-full h-screen bg-[#0e0e14] text-gray-200 flex flex-col justify-center items-center px-4 font-mono relative">
      {/* Intro Text */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-3 tracking-wide">
        Christopher Rivera
      </h1>
      <p className="text-sm md:text-lg text-gray-400 text-center max-w-xl mb-6 italic">
        Strategist at heart. Developer by choice. <br />
        From game design to clean code — I build with intention.
      </p>

      {/* Start button styled like a game menu */}
      <button className="px-6 py-2 border border-gray-500 rounded-md hover:bg-gray-700 transition duration-300 tracking-wider text-sm uppercase">
        Start Journey
      </button>

      <div className="absolute bottom-4 text-xs text-gray-600 text-center">
        <p className="opacity-70">© 2025 — Portfolio v1.0</p>
      </div>
    </div>
  );
};

export default Intro;
