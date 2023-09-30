import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { Element } from 'react-scroll';
import '../../css/contact.css';
import axios from 'axios';

export default function Contact() {

  const [name, setName] = useState('');
  const [from, setFrom] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = () => {
    const email = {
      name,
      from,
      body
    }

    axios.post("http://localhost:8080/send-email", email)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))
  }

  return (
    <>
      <div className="contact-container">
        <Element name="contact">
          <h1 className="contact-title">Contact Me</h1>
        </Element>
        <form method="POST" className="contact-form" onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}>
          <div className="input-container">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" required  onChange={(e) => setName(e.target.value)}/>
          </div>

          <div className="input-container">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required onChange={(e) => setFrom(e.target.value)}/>
          </div>

          <div className="input-container">
            <label>Message</label>
            <textarea rows="5" placeholder="Your message..." required onChange={(e) => setBody(e.target.value)}/>
          </div>

          <Button type="submit" className="submit-btn" variant="light">Send</Button>
        </form>
      </div>
    </>
  )
}

