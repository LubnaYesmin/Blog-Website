import React from 'react';
import Logo from "../img/greenlogo.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <img src={Logo} alt="Logo" />
        <p>
          We are a passionate team of developers, creating innovative solutions for businesses and individuals. Our aim is to help you grow and succeed.
        </p>
        <a href="mailto:info@company.com">info@company.com</a>
        <a href="tel:+123456789">+123 456 789</a>
      </div>

      <div className="footer-links">
        <h4>Quick Links</h4>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>

      <div className="footer-social">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
