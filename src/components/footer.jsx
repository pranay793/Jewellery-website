import React, { useState } from 'react';
import './custom.css';
import logo from '../assets/logo-retina.svg';
const Footersec = () => {
  return (
    <footer>
      <div className='container'>
        <div className='row pb-4'>
            <div className='col-md-3'>
            <div className="logo"><img src={logo} alt="Logo"/></div>
            </div>
            <div className='col-md-3'>
                <h2>About Us</h2>
                <ul>
                 <li><a href='#'>Home</a></li>
                 <li><a href='#'>About</a></li>
                 <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className='col-md-3'>
            <h2>Shop</h2>
                <ul>
                 <li><a href='#'>Rings</a></li>
                 <li><a href='#'>Bracelets</a></li>
                 <li><a href='#'>Earrings</a></li>
                 <li><a href='#'>Necklaces</a></li>
                </ul>
            </div>
            <div className='col-md-3'>
            <h2>Address</h2>
            <p>123 Fifth Avenue, New York,<br />NY 10160</p>
            <br />
            <p><a href='mailto:contact@info.com'>contact@info.com</a></p>
            <p><a href='mailto:contact@info.com'>929-242-6868</a></p>
            </div>
        </div>
      </div>
      <div className='bottom-ftr'>
      <p>Copyright © 2025 Blingg Jewelry | Powered by Blingg Jewelry</p>
      </div>
    </footer>
  );
};


export default Footersec;
