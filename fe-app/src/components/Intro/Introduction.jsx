import React from 'react';
import ProfilePic from '../../images/my-pic.jpg';
import '../../css/intro.css';

export default function Introduction() {
  return (
    <>
      <h1 className="section-title">About Me</h1>
      <div className="introduction">
       
       <div className="about-me">
          <h3>Hello my name is,</h3>
          <h1>Christopher Rivera</h1>
          <div className="title">
            <ul>
              <li><h6>Fullstack Developer</h6></li>
              <li><h6>Game Developer</h6></li>
            </ul>
          </div>

          <div className="text">
            <p>
              <br />
              I am a CUNY Student at Lehman College majoring in Computer Science, born and raised in
              Bronx, NY
              who is passionate about programming could say obsessed with it! Hoping to utilized my 
              skills that have been gain through being in college and doing self by applying what I've
              learned through making some side projects.
            </p>
          </div>
        </div>

        <div className="profile-picture">
          <div class="circular-image">
            <img src={ProfilePic} alt="Profile Picture" />
          </div>
        </div>
      </div>
    </>
  )
}
