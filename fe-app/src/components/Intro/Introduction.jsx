import React from 'react';
import ProfilePic from '../../images/my-pic.jpg';
import '../../css/intro.css';

export default function Introduction() {
  return (
    <>
      <div className="introduction">
        <h1>About Me</h1>
       
       <div className="about-me">
          <h3>Hello my name is</h3>
          <h1>Christopher Rivera</h1>
          <ul>
            <li>Fullstack Developer</li>
            <li>Game Developer</li>
          </ul>
        </div>

        <div class="circular-image">
          <img src={ProfilePic} alt="Profile Picture" />
        </div>
      </div>
    </>
  )
}
