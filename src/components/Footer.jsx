import React from "react";
import { FaPaperPlane } from "react-icons/fa"; 
import "../styles/Footer.css"; 

const Footer = () => {
  return (
    <div className="footer-container">
    
      <div className="footer-left">
        <h1 className="footer-logo">HEATZ</h1>
        <p className="footer-text">
          Heatz® is a registered brand of Ashtelgroup. It is registered in different countries
          including Saudi Arabia and UAE, especially in the Middle East. Heatz® is well known
          for its variety and quality of products launched in every season.
        </p>

        
        <div className="email-container">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="send-button">
            <FaPaperPlane />
          </button>
        </div>

        
        <label className="checkbox-container">
          <input type="checkbox" />
          I confirm acceptance of the Privacy Policy and consent to its terms, including the use of cookies.
        </label>
      </div>

      
      <div className="footer-right">
        <div className="footer-column">
          <h4>Mob Acc</h4>
          <ul>
            <li>Earphones</li>
            <li>Cables</li>
            <li>Adapters</li>
            <li>Power Bank</li>
            <li>Batteries</li>
            
          </ul>
        </div>

        <div className="footer-column">
          <h4>Com Acc</h4>
          <ul>
            <li>Earphones</li>
            <li>Cables</li>
            <li>Adapters</li>
            <li>Power Bank</li>
            <li>Batteries</li>
            
          </ul>
        </div>

        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>Contact Us</li>
        
            
            <li>Return Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
