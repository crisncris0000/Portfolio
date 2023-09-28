import React from 'react';
import '../../css/projects.css';
import Mckcreations from '../../images/projects/mckcreation.png';
import LegalTeamManagement from '../../images/projects/legal-team-management.jpeg';
import JumpSideDash from '../../images/projects/jump-side.png';
import Card from 'react-bootstrap/Card';
import LearnMore from './LearnMore';
import { Button } from 'react-bootstrap';
import { Element } from 'react-scroll';

export default function Projects() {
    return (
        <>
            <div className="project-container">
                <Element name="projects"><h1 className="project-title">Projects</h1></Element>
                <div className="project-list">
                    <Card className="space-card">
                        <Card.Img variant="top" src={Mckcreations} />
                        <Card.Body>
                            <Card.Title>Carols Crafts</Card.Title>
                            <Card.Text>
                                A fullstack e-commerce web application, built using ReactJS and Spring using Java
                            </Card.Text>
                            <LearnMore projectTitle={"Carols Crafts"}
                            description={`A fullstack e-commerce web application, built using ReactJS for the frontend 
                            and Spring using Java for the backend, in this application the user has the ability to 
                            register, and authenticate themselves.
                            The user can also add items to their cart, and once they decide to checkout the payment
                            is handled by Stripe, also saving the users previous purchases.`} 
                            status={"Completed"}/>

                            <Button variant="light" className="custom-btn">
                                <a href="https://github.com/crisncris0000/CarolsCrafts" target="_blank" rel="noreferrer">
                                    Source Code
                                </a>
                            </Button>

                            <Button variant="light" className="custom-btn">
                                <a href="https://Mckcreation.com" target="_blank" rel="noreferrer">
                                    Live Link
                                </a>
                            </Button>
                        </Card.Body>
                    </Card>


                    <Card className="space-card">
                        <Card.Img variant="top" src={LegalTeamManagement} />
                        <Card.Body>
                            <Card.Title>Legal Team Management</Card.Title>
                            <Card.Text>
                                A fullstack web application, built using ReactJS and Golang, team of 4 people,
                                I worked on the backend
                            </Card.Text>
                            <LearnMore projectTitle={"Carols Crafts"}
                            description={`In this web application, its a place where users will want to speak with a Law Firm
                            about suing a company for whatever reason it may be, it will have employees who specialize in these
                            type of cases, calenders for to know the schedule of a specific Attorney, notifications
                            for the Attorney to remind them, and the payout for a specific case.`}
                            status={"Ongoing"}/>

                            <Button variant="light" className="custom-btn">
                                <a href="https://github.com/legal-team-managemnt" target="_blank" rel="noreferrer">
                                    Source Code
                                </a>
                            </Button>
                        </Card.Body>
                    </Card>


                    <Card className="space-card">
                        <Card.Img variant="top" src={JumpSideDash} />
                        <Card.Body>
                            <Card.Title>Jump Side Dash</Card.Title>
                            <Card.Text>
                                Game application using the Game Engine Unity, and using C# hosted on itch.io
                            </Card.Text>
                            <LearnMore projectTitle={"Carols Crafts"}
                            description={`In this Game the user is a square shaped player who has only one ability...
                            which is to jump! The user will jump its way to the finish and keep going reaching new levels.`}
                            status={"Completed"}/>

                            <Button variant="light" className="custom-btn">
                                <a href="https://phillipb9345.itch.io/jump-side-dash" target="_blank" rel="noreferrer">
                                    Live Link
                                </a>
                            </Button>
                        </Card.Body>
                    </Card>

                </div>
            </div>
        </>
    );
}