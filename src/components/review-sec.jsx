import React, { useState } from 'react';
import './custom.css';
import trend from '../assets/since-2.jpg';
const Reviewsec = () => {
  return (
    <section className="review-area">
    <div className='container'>
    <div class="heading-con">
            <h2>Customer review</h2>
            <img src="images/Line 2.png" alt=""/>
            </div>
        <div className='row align-items-center'>
         <div className='col-md-6 bg-grey'>
           <div className='row g-0'>
             <div className='col-6 rive-img'>
             <img src="images/review1.jpg" alt=""/>
             </div>
             <div className='col-6 review-box border-top2'>
               <img src="images/quote.png" alt="" className='mb-3 w-45'/>
                <p>“The quality of the clothes exceeded my expectations. Every piece feels premium, and the designs are
                so trendy. I'm obsessed with my new wardrobe additions!” </p>
                <img src="images/review-cus1.png" alt="" className='cus-img' />
                <p><small>David williams</small></p>
             </div>
            </div>
         </div>
         <div className='col-md-6 bg-grey'>
         <div className='row g-0'>
             <div className='col-6 rive-img'>
             <img src="images/review2.jpg" alt=""/>
             </div>
             <div className='col-6 review-box border-top2'>
               <img src="images/quote.png" alt="" className='mb-3 w-45'/>
                <p>“This jewelry shop is my go-to! The designs are elegant, you get. I recently got a pair of silver earrings, 
                    and they are just perfect. Amazing service too!” </p>
                <img src="images/review-cus2.png" alt="" className='cus-img' />
                <p><small>David williams</small></p>
             </div>
            </div>
         </div>
        </div>
    </div>
    </section>
  );
};


export default Reviewsec;
