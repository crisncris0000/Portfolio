import React from 'react';
import Space from '../../images/space.jpg';
import '../../css/intro.css';
import { motion } from 'framer-motion';
import AboutMe from './AboutMe';
import Technologies from './Technologies';

export default function Introduction() {
  return (
    <>
      <div className="introduction">

        <motion.div 
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0}}
            transition={{ ease: "easeOut", duration: 1 }}
            className="">
          
          <div className="img-container">
            <img src={Space} alt="earth" />
          </div>
        </motion.div>
       
       <div className="header">
          <h1>Christopher Rivera</h1>

          <div className="job-titles">
            <ul>
              <li><h6>Fullstack Developer</h6></li>
              <li><h6>Game Developer</h6></li>
            </ul>
          </div>

          <div className="links">
            <button className="btn">Contact</button>
            <button className="btn">Download Resume</button>
          </div>

        </div>
      </div>

      <AboutMe />
      <Technologies />
    </>
  )
}
