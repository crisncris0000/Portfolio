import React from 'react';
import { Element } from 'react-scroll';
import MyPic from '../../images/my-pic.jpg';

export default function AboutMe() {
  return (
    <div className="about-me">
        <Element name='about'><h1>About Me</h1></Element>
        <img className='my-pic' src={MyPic}/>
        <p>
            <br />
            I am a CUNY Student at Lehman College majoring in Computer Science, born and raised in
            Bronx, NY
            who is passionate about programming could say obsessed with it! Hoping to utilized my 
            skills that have been gain through being in college and doing self by applying what I've
            learned through making some side projects.
        </p>
    </div>
  )
}
