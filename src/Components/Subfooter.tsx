import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 
import LogoImage from '../assets/images/cc-logo.png';

import '../SubFooter.css';

const SubFooter = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowUpArrow(true);
    } else {
      setShowUpArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="subfooter">
      <div className="left-content">
        <p>Terms and Conditions</p>
      </div>
      <div className="right-content">
        <img src={LogoImage} alt="Logo" />
      </div>
      {showUpArrow && (
        <div className="up-arrow" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default SubFooter;
