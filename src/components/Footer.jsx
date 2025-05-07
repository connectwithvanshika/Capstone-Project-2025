import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="quick-links">
        <a href="#">About Us</a>  |  
        <a href="#"> Services</a>  | 
        <a href="#"> Privacy Policy</a>  |
        <a href="#"> Terms and Service</a>
      </div>
      <div className="contact-info">
        <p>Contact us at : calmsphere@google.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="social-links">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaInstagram /></a>
      </div>
      <p>&copy; 2025 CalmSphere.</p>
    </footer>
  );
};

export default Footer;
