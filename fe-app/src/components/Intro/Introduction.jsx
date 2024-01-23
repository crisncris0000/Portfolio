import React from 'react';
import Space from '../../images/space.jpg';
import Github from '../../images/socials/github.png';
import LinkedIn from '../../images/socials/linkedin.png';
import '../../css/intro.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import Nav from 'react-bootstrap/Nav';
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
              <li><h6>Backend Developer</h6></li>
              <li><h6>Game Developer</h6></li>
            </ul>
          </div>

          <div className="links">
            <button className="btn">
              <Link to="contact" smooth={true} duration={500}>
                <Nav.Link>Contact</Nav.Link>
              </Link>
            </button>
            <button className="btn">
              <a href="/ChristopherRiv-CSResume.docx.pdf" download style={{color: "white"}}>
                Download Resume
              </a>
            </button>
          </div>
          <div className="socials">
            <a href="https://github.com/crisncris0000" target="_blank" rel="noreferrer" className="social-link">
              <img src={Github} alt="github logo"/>
            </a>

            <a href="https://www.linkedin.com/in/christopher-rivera-aa08071a3/" target="_blank" rel="noreferrer" className="social-link">
              <img src={LinkedIn} alt="LinkedIn logo"/>
            </a>
          </div>

        </div>
      </div>

      <AboutMe />
      <Technologies />
    </>
  )
}
