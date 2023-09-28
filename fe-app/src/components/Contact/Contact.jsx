import { Button } from 'react-bootstrap';
import React from 'react';
import { Element } from 'react-scroll';
import '../../css/contact.css';

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <Element name="contact">
          <h1 className="contact-title">Contact Me</h1>
        </Element>
        <form method="POST" className="contact-form">
          <div className="input-container">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="input-container">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="input-container">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message..." required></textarea>
          </div>

          <Button type="submit" className="submit-btn" variant="light">Send</Button>
        </form>
      </div>
    </>
  )
}

