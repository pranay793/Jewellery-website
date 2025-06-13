import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bestselling from './Bestselling';
import Trendsec from './TrendSec';
import Wish from '../assets/wishlist-icon.svg';
import Facebook from '../assets/fb.svg';
import Twiter from '../assets/tw.svg';
import Youtube from '../assets/youtube.svg';
import Instagram from '../assets/insta.svg';

const ProductDetails = () => {
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQty = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const productImages = [
    "/images/product1.png",
    "/images/product2.png",
    "/images/product3.png",
  ];

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={productImages[i]} alt={`thumb-${i}`} style={{ width: "100%", height: "auto" }} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section className='inner-banner'>
        <div className='container'>
          <h1>Shop</h1>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><i className="fa-solid fa-angle-right"></i></li>
            <li>Shop</li>
          </ul>
        </div>
      </section>

      <section className='middle-sec'>
        <div className='container'>
          <div className='row'>

            {/* Product Image Slider */}
            <div className='col-md-6 product-slide'>
              <Slider {...settings}>
                {productImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`product-${index}`} style={{ width: "100%" }} />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Product Details */}
            <div className='col-md-6 Product-Details'>
              <h2>JWDA Pendant Lamp Brushed Steel</h2>
              <p>Reference: demo_1</p>
              <ul className="star-ratting">
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star-half-stroke"></i></li>
              </ul>
              <h3 className='price'>£29.99</h3>
              <p className='descrip'>Brands: <span>Buxton</span></p>
              <p className='descrip'>Product Code: <span>Product 16</span></p>
              <p className='descrip'>Reward Points: <span>600</span></p>
              <p className='descrip'>Availability: <span className='green-text'>In Stock</span></p>

              <h4 className='mt-3'>Quantity</h4>
              <div className="quantity-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                <button className="quantity-btn" onClick={decreaseQty}>-</button>
                <input type="text" className="quantity-input" value={quantity} readOnly style={{ width: '40px', textAlign: 'center' }} />
                <button className="quantity-btn" onClick={increaseQty}>+</button>
              </div>

              <div className='d-flex align-items-center mt-4 mb-3 gap-2'>
                <button className='crt-btn'>ADD TO CART</button>
                <span className='wishlist'>
                  <img src={Wish} alt="Wish"/>
                  </span>
              </div>
              <p className='descrip'>Tags: <span className='grey-text'>Ring,  Necklaces, Braid</span></p>
              <div className='d-flex align-items-center mt-3 mb-3 gap-3'>
              <span className='wishlist social-icon'>
                  <img src={Facebook} alt="Wish"/>
              </span>
              <span className='wishlist social-icon'>
                  <img src={Twiter} alt="Wish"/>
              </span>
              <span className='wishlist social-icon'>
                  <img src={Youtube} alt="Wish"/>
              </span>
              <span className='wishlist social-icon'>
                  <img src={Instagram} alt="Wish"/>
              </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='describ-tab'>
  <div className='container'>
    <ul className="nav nav-tabs" id="productTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="description-tab"
          data-bs-toggle="tab"
          data-bs-target="#description"
          type="button"
          role="tab"
          aria-controls="description"
          aria-selected="true"
        >
          Description
        </button>
      </li>
      <li> <img src="/images/Line-3.png" alt=""/></li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="specification-tab"
          data-bs-toggle="tab"
          data-bs-target="#specification"
          type="button"
          role="tab"
          aria-controls="specification"
          aria-selected="false"
        >
          Specification
        </button>
      </li>
      <li> <img src="/images/Line-3.png" alt=""/></li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="reviews-tab"
          data-bs-toggle="tab"
          data-bs-target="#reviews"
          type="button"
          role="tab"
          aria-controls="reviews"
          aria-selected="false"
        >
          Reviews
        </button>
      </li>
    </ul>

    <div className="tab-content pt-3" id="productTabContent">
      <div
        className="tab-pane fade show active productTabContent"
        id="description"
        role="tabpanel"
        aria-labelledby="description-tab"
      >
        <h4>Karat Gold</h4>
        <p>24K gold is called pure gold or fine gold. (99.99% pure) The color of fine gold is a bright 
          yellow with a bit of orange. Some say it is too soft for jewelry application, but high karat 
          gold is commonly worn in some parts of the world, and it is growing in popularity in designer 
          jewelry. Most will prefer karat golds for their engagement rings, because of the needed 
          hardness to hold a gemstone.</p>
        <h4>Gold Colors</h4>
        <p>The most popular color is yellow which is made by adding silver and some copper. The 
          metals are melted together to form an alloy of the desired color and karat. It is very 
          important that all the ingredients are pure and that the amounts of each are weighed 
          very accurately to prevent porosity, which weakens the alloy.</p>
          <h4>White alloys</h4>
        <p>There are two kinds of White Gold: Nickel based and Palladium based. Some people are 
          allergic to Nickel, so Palladium white gold is a good alternative. Palladium white
          gold is the only legal alloy in Europe. It also self burnishes and keeps a polish.</p>
      </div>

      <div
        className="tab-pane fade"
        id="specification"
        role="tabpanel"
        aria-labelledby="specification-tab"
      >
        <ul className='specification-list'>
          <li><strong>Type:</strong> Pendant Necklace</li>
          <li><strong>Material:</strong> 925 Sterling Silver with Rhodium Plating</li>
          <li><strong>Gemstone:</strong> Cubic Zirconia (AAA Quality)</li>
          <li><strong>Pendant Size:</strong> 18mm x 12mm</li>
          <li><strong>Chain Length:</strong> Adjustable 16" - 18" (Lobster Clasp)</li>
          <li><strong>Weight:</strong> Approx. 8 grams</li>
          <li><strong>Finish:</strong> Polished & Anti-Tarnish Coated</li>
          <li><strong>Occasion:</strong> Daily Wear / Party / Anniversary / Gift</li>
          <li><strong>Care Instructions:</strong> Avoid contact with perfumes and water. Store in a dry, soft cloth pouch.</li>
          <li><strong>Warranty:</strong> 1-Year Manufacturing Warranty</li>
        </ul>
      </div>

      <div
  className="tab-pane fade"
  id="reviews"
  role="tabpanel"
  aria-labelledby="reviews-tab"
>
  <div className="review-section">

  <div className="review-box">
  <div className="review-header d-flex align-items-center gap-3">
    <img
      src="/images/reviewer1.jpg"  // Replace with actual path or URL
      alt="Priya Sharma"
      className="reviewer-img"
      style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
    />
    <div>
      <strong>Priya Sharma</strong>
      <div className="star-rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
    </div>
  </div>
  <p className="review-date">Reviewed on: 10 June 2025</p>
  <p className="review-text">
    Beautiful pendant! The quality is excellent, and it looks even better in person. Got many compliments. Highly recommend.
  </p>
</div>

<div className="review-box">
  <div className="review-header d-flex align-items-center gap-3">
    <img
      src="/images/reviewer2.jpg"
      alt="Ayesha Khan"
      className="reviewer-img"
      style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
    />
    <div>
      <strong>Ayesha Khan</strong>
      <div className="star-rating">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
        <i className="fa-regular fa-star"></i>
      </div>
    </div>
  </div>
  <p className="review-date">Reviewed on: 8 June 2025</p>
  <p className="review-text">
    Pretty design and perfect for daily wear. Delivery was fast. Slightly smaller than expected, but still lovely.
  </p>
</div>

    
  </div>
</div>
    </div>
  </div>
</section>



      <Bestselling />
      <Trendsec />
    </>
  );
};

export default ProductDetails;
