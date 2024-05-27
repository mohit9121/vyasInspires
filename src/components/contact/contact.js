import React from 'react';
import Navbar from '../navbar/Navbar';
import './contact.css';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        <div className="contact-details">
          <h2>Eshwar Chandra Vyas</h2>
          <p> <b>Email</b>: vyas6260789491@gmail.com</p>
          <p> <b>Phone:</b> +91 6260789491</p>
          {/* <p>Post: Teacher</p> */}
          <p> <b>Home Address: </b> Biaora Rajgarh, Madhya Pradesh, 465674</p>
          <p className="biography">
            <b>Biography:</b> John Doe is a seasoned developer with over 10 years of experience in the tech industry. He specializes in web development and has a passion for teaching and inspiring others through his work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
