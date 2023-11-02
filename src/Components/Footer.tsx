import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import LogomarkImage from "../assets/images/Logomark.png";
import LogotypeImage from "../assets/images/Logotype.png";
import backgroundimage from "../assets/images/footerbackground.png";
import "../Footer.css";

const Footer: React.FC = () => {
  return (
   
    <div
      className="footer-background"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={LogomarkImage} alt="Logomark" />
            <img src={LogotypeImage} alt="Logotype" />
            <p>
              We are a collaboration of non-government organization and
              professionals working to ensure that government spending.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com">
                <FaFacebook className="icon" />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedin className="icon" />
              </a>
              <a href="https://twitter.com">
                <FaTwitter className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h1>Links</h1>
            <ul>
              <li>
                <a href="#">Campaign</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h1>Resources</h1>
            <ul>
              <li>
                <a href="#">Transparency Toolkit</a>
              </li>
              <li>
                <a href="#">Evidence</a>
              </li>

              <li>
                <a href="#">Best Practices</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h1>Work with Us</h1>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Join us</a>
              </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Footer;
