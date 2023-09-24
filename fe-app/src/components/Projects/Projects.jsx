import React from 'react';
import '../../css/projects.css';
import Mckcreations from '../../images/mckcreation.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import LearnMore from './LearnMore';

export default function Projects() {
    return (
        <>
            <div className="project-container">
                <h1 className="project-title">Projects</h1>

                <div className="project-list">
                    <Card className="space-card">
                        <Card.Img variant="top" src={Mckcreations} />
                        <Card.Body>
                            <Card.Title>Carols Crafts</Card.Title>
                            <Card.Text>
                                A fullstack e-commerce web application, built using ReactJS and Spring using Java...
                            </Card.Text>
                            <LearnMore />
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    );
}



<Card.Text>
A fullstack e-commerce web application, built using ReactJS and Spring using Java, 
in this application the user has the ability to register, and authenticate themselves.
The user can also add items to their cart, and once they decide to checkout the payment
is handled by Stripe, also saving the users previous purchases.
<br />
The admin has the ability to create these crafts and determine the price for the user to see.
</Card.Text>