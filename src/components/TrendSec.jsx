import React, { useState } from 'react';
import './custom.css';
import trend from '../assets/since-2.jpg';
const Trendsec = () => {
  return (
    <section className="why-choose">
    <div className='container'>
        <div className='row align-items-center'>
        <div className='col-md-5 trend-box'>
                <h3>Unique pieces</h3>
                <h2>
                Be<br />
                always<br />
                on<br />
                trend
                </h2>
                <p className='mb-5'>We believe in creating jewellery that lasts. Each piece is made from 
                high-quality materials, ensuring durability and timeless beauty. 
                Our commitment to excellence means you can wear your favourite pieces 
                with confidence, knowing they will withstand the test of time.</p>
                <a href='#' className='comm-btn'>SHOP NOW</a>
            </div>
            <div className='col-md-7'>
            <div className="lft-img"><img src={trend} alt="Trend"/></div>
            </div>
            
        </div>
    </div>
    </section>
  );
};


export default Trendsec;
