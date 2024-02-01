import React from 'react';
import Git from '../../images/technologies/git.png';
import CSharp from '../../images/technologies/CSharp.png';
import Java from '../../images/technologies/java.png';
import Docker from '../../images/technologies/docker.png';
import CSS from '../../images/technologies/css.png';
import Go from '../../images/technologies/golang.png';
import HTMLLogo from '../../images/technologies/html.png';
import MySQL from '../../images/technologies/mysql.png';
import NodeJS from '../../images/technologies/nodejs.png';
import Javascript from '../../images/technologies/javascript.png';
import Postgresql from '../../images/technologies/postgresql.png';
import Spring from '../../images/technologies/spring.png';
import ReactJS from '../../images/technologies/react.png';

export default function Technologies() {
    const technologyImages = [
      Java, CSharp, Go, Javascript,  HTMLLogo, CSS, Git, Docker, MySQL,
      Postgresql, Spring, NodeJS, ReactJS
    ];

  return (
    <div className="technologies">
        <h1>Technologies I've worked with</h1>
        <div className='technology-logo'>
                {technologyImages.map((techImg, index) => (
                    <img key={index} src={techImg} alt="Technology" />
                ))}
        </div>
    </div>
  )
}
