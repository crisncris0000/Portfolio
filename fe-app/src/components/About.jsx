import React, { useState } from 'react';
import profileImage from '../assets/me.jpg';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-12">
      <div className="flex flex-col items-center gap-8">
        {/* Manga Panel Style Section */}
        <div className="w-full max-w-4xl p-6 bg-gradient-to-br from-gray-800 to-black border-4 border-white rounded-xl shadow-xl">
          <div className="flex gap-8">
            {/* Manga Panel: Image Section */}
            <div className="w-1/3 relative">
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 rounded-lg z-0"></div>
              <img
                src={profileImage} // Replace with your image path
                alt="Christopher Rivera"
                className="w-full h-full object-cover rounded-lg border-4 border-gray-700 z-10"
              />
            </div>

            {/* Manga Panel: Text Section */}
            <div className="w-2/3 text-left z-10">
                <h2 className="text-4xl font-bold text-white mb-4">Christopher Rivera</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                    I'm a Computer Science undergraduate with a strong passion for both web and game development. 
                    My journey began with an interest in game design, which naturally evolved into a pursuit of computer science. 
                    Today, I specialize in full-stack development, with a focus on building engaging, efficient, 
                    and user-friendly software solutions, while also doing game development on the side.
                </p>

            </div>
          </div>

          {/* Learn More Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleExpand}
              className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-400 transition duration-300"
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
            </button>
          </div>

          {/* Expanded Content (Conditional) */}
          {isExpanded && (
            <div className="mt-6 text-lg text-gray-300">
              <p className="text-lg mt-4 text-gray-400">
                I'm a Latino male with a wide range of hobbies outside of tech. 
                I enjoy going to the gym, playing video games, and watching anime and professional wrestling. 
                I also follow basketball and have a deep love for animals — 
                I currently have a pet turtle who keeps me company.
              </p>

            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p className="text-gray-400">
          Find me on <a href="https://www.linkedin.com/in/christopher-rivera-aa08071a3/" className="underline">LinkedIn</a> | <a href="https://github.com/crisncris0000" className="underline">GitHub</a>
        </p>
      </footer>
    </section>
  );
};

export default About;
