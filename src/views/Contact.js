import React, { useState } from 'react';

//variables for contact form fields and errors

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({ email: '', name: '', message: '' });

//Function to validate the form - once validated correctly the user will get the below alert on screen
  const validateForm = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { email: '', name: '', message: '' };
//Check if email is empty
    if (email === '') {
      newErrors.email = 'Email box cannot be left Blank';
      isValid = false;
    }
//Check if name is empty
    if (name === '') {
      newErrors.name = 'Name box cannot be left Blank';
      isValid = false;
    }
//Check if message box  is empty
    if (message === '') {
      newErrors.message = 'Message box cannot be left Blank';
      isValid = false;
    }
//update errors
    setErrors(newErrors);

    if (isValid) {
      alert(
        "Form submitted Successfully! A member of our Amazing team will contact you within 24 hours in relation to your request"
      );
// Here you would typically send the form data to the business where they hold that data but for the program the form will just reset
      setEmail('');
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <form onSubmit={validateForm}>
{/* Email input field */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
{/* Name input field */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
        </div>
        
{/*  Message box field */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <div className="text-danger">{errors.message}</div>}
        </div>
{/* Submit button for form */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default Contact;