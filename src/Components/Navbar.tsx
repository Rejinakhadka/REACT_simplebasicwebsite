import React, { useState } from 'react';
import LogomarkImage from '../assets/images/Logomark.png';
import LogotypeImage from '../assets/images/Logotype.png';
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"; 
import TransparentImage from "../assets/images/background.png";
import "../Navbar.css"; 

const Navbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <div className="background-image" style={{ backgroundImage: `url(${TransparentImage})` }}>
      <div className="nav">
        <nav className="nav">
          <nav className='nav-container'>
            <div className="logo">
              <img src={LogomarkImage} alt="Logomark" />
              <img src={LogotypeImage} alt="Logotype" />
            </div>
            <ul className="menu">
              <li>Home</li>
              <li>About Us</li>
              <li>Case Studies</li>
              <li>Resources</li>
            </ul>
            <div className="search-icon" onClick={toggleSearch}>
              <AiOutlineSearch />
            </div>
            {searchOpen && (
              <div className={`search-bar ${searchOpen ? 'visible' : 'hidden'}`}>
                <input type="text" placeholder="Search..." />
                <div className="close-button" onClick={closeSearch}>
                  <AiOutlineClose />
                </div>
              </div>
            )}
          </nav>
        </nav>
      </div>
      <div className="content">
        <h1 className='h'>Beautiful analytics to grow smarter</h1>
        <p className='p'>Powerful self serve product and growth analytics to help you convert, engage ,
        and retain more users. Trusted by over 4,000 startups.</p>
        <button>Why Catalog ?</button>
      </div>
    </div>
  );
};

export default Navbar;
