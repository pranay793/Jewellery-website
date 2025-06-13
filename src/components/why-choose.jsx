import React, { useState } from 'react';
import './custom.css';
import why from '../assets/since-1.jpg';
const Whychoose = () => {
  return (
    <section className="why-choose">
    <div className='container'>
        <div className='row align-items-center'>
            <div className='col-md-6'>
            <div className="lft-img"><img src={why} alt="why"/></div>
            </div>
            <div className='col-md-6'>
                <h3>Radiant gemstone beauty.</h3>
                <h2>Why Choose US</h2>
                <p>We believe in creating jewellery that lasts. Each piece is made from 
                high-quality materials, ensuring durability and timeless beauty. 
                Our commitment to excellence means you can wear your favourite pieces 
                with confidence, knowing they will withstand the test of time.</p>
                <a href='#' className='comm-btn why-btn'>SHOP NOW</a>
            </div>
        </div>
    </div>
    </section>
  );
};


export default Whychoose;
