import React, { useState, useContext } from 'react'; 
import { CartContext } from '../context/CartContext';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bestselling from './Bestselling';
import Trendsec from './TrendSec';
import Facebook from '../assets/fb.svg';
import Twiter from '../assets/tw.svg';
import Youtube from '../assets/youtube.svg';
import Instagram from '../assets/insta.svg';

const ProductDetails = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = location.state?.product;

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return <div style={{ padding: "50px", textAlign: "center" }}><h2>Product not found.</h2></div>;
  }

  const productImages = product.imageArray?.length > 0
    ? product.imageArray.map(img => img.url)
    : [product.image];

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

  const handleBuyNow = () => {
    navigate('/checkout', {
      state: {
        cartData: [{ ...product, quantity }],
        singleBuy: true
      }
    });
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.id === product.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cartItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [...cartItems, { ...product, quantity }];
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate('/cart');
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
            <div className='col-md-6 product-slide'>
              <Slider {...settings}>
                {productImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`product-${index}`} style={{ width: "100%" }} />
                  </div>
                ))}
              </Slider>
            </div>

            <div className='col-md-6 Product-Details'>
              <h2>{product.name}</h2>
              <p>Reference: #{product.id}</p>
              <ul className="star-ratting">
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star"></i></li>
                <li><i className="fa-solid fa-star-half-stroke"></i></li>
              </ul>

              <h3 className='price'>${(product.price * quantity).toFixed(2)}</h3>
              <p className='descrip'>Brands: <span>{product.Vendor}</span></p>
              <p className='descrip'>Weight: <span>{product.Weight}</span></p>
              <p className='descrip'>Purity: <span>{product.Purity}</span></p>
              <p className='descrip'>Availability: <span className='green-text'>{product.Availability}</span></p>

              <h4 className='mt-3'>Quantity</h4>
              <div className="quantity-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
                <button className="quantity-btn" onClick={decreaseQty}>-</button>
                <input type="text" className="quantity-input" value={quantity} readOnly style={{ width: '40px', textAlign: 'center' }} />
                <button className="quantity-btn" onClick={increaseQty}>+</button>
              </div>

              <div className='d-flex align-items-center mt-4 mb-3 gap-2'>
                <button className='crt-btn' onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}>ADD TO CART</button>
                <button className='buy-now-btn' onClick={handleBuyNow}>BUY NOW</button>
              </div>

              <p className='descrip'>Tags: <span className='grey-text'>Ring, Necklace, Braid</span></p>

              <div className='d-flex align-items-center mt-3 mb-3 gap-3'>
                <span className='wishlist social-icon'><img src={Facebook} alt="Facebook" /></span>
                <span className='wishlist social-icon'><img src={Twiter} alt="Twitter" /></span>
                <span className='wishlist social-icon'><img src={Youtube} alt="YouTube" /></span>
                <span className='wishlist social-icon'><img src={Instagram} alt="Instagram" /></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='describ-tab'>
        <div className='container'>
          <ul className="nav nav-tabs" id="productTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">
                Description
              </button>
            </li>
            <li><img src="/images/Line-3.png" alt="" /></li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="specification-tab" data-bs-toggle="tab" data-bs-target="#specification" type="button" role="tab" aria-controls="specification" aria-selected="false">
                Specification
              </button>
            </li>
            <li><img src="/images/Line-3.png" alt="" /></li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">
                Reviews
              </button>
            </li>
          </ul>

          <div className="tab-content pt-3" id="productTabContent">
            <div className="tab-pane fade show active productTabContent" id="description" role="tabpanel" aria-labelledby="description-tab">
              <h4>More About Product</h4>
              <p>{product.describ || "High-quality product with premium finishing."}</p>
            </div>

            <div className="tab-pane fade" id="specification" role="tabpanel" aria-labelledby="specification-tab">
              <ul className='specification-list'>
                <li><strong>Type:</strong> Fashion Jewelry</li>
                <li><strong>Material:</strong> Metal Alloy</li>
                <li><strong>Finish:</strong> Anti-Tarnish</li>
                <li><strong>Weight:</strong> Lightweight</li>
                <li><strong>Warranty:</strong> 1 Year</li>
              </ul>
            </div>

            <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
              <div className="review-section">
                <div className="review-box">
                  <div className="review-header d-flex align-items-center gap-3">
                    <img src="/images/reviewer1.jpg" alt="Reviewer" className="reviewer-img" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
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
                  <p className="review-text">Beautiful pendant! The quality is excellent, and it looks even better in person.</p>
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
