// src/components/Header.js
import React, { useState } from 'react';
import './Header.css';
import './custom.css';
import logo from '../assets/logo-retina.svg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
       
        <div className='container'>
        <div className='row align-items-center'>
        <div className='col-md-3 col-7'>
         <div className="logo"><a href="/"><img src={logo} alt="Logo"/></a></div>
         </div>
         <div className='col-md-6 col-2 order-lg-1 order-2'>
      <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        ☰
      </div>

      <nav className={`nav-links ${mobileMenuOpen? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="#">About us</a>
        <a href="/Shop">Product</a>
        <a href="#">Contact us</a>
      </nav>
      </div>
      <div className='col-md-3 col-3 order-lg-2 order-1'>
      <div className="header-icons">
        <span><i class="fa-solid fa-magnifying-glass"></i></span>
        <span><i class="fa-solid fa-cart-shopping"></i></span>
        <span><i class="fa-solid fa-heart"></i></span>
      </div>
      </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
