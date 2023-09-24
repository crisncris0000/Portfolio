import React from 'react';
import { Link } from 'react-scroll';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/navigation.css';

export default function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="custom-navbar">
                <Container>
                    <Navbar.Brand href="#home">Christopher Rivera</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav>
                            <Link to="about" smooth={true} duration={500} className="nav-link">
                                <Nav.Link>About Me</Nav.Link>
                            </Link>
                            <Link to="projects" smooth={true} duration={500} className="nav-link">
                                <Nav.Link>Projects</Nav.Link>
                            </Link>
                            <Link to="contact" smooth={true} duration={500} className="nav-link">
                                <Nav.Link>Contact</Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

