import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './custom.css';



const FourProductCarousel = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [productsData, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const existing = cartItems.find(item => item.id === product.id);
    let updatedCart;
  
    if (existing) {
      setPopupMessage("This product is already in your cart!");
      setTimeout(() => setPopupMessage(''), 2000);
      return; // Stop here, don’t add again
    } else {
      updatedCart = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };


  const navigate = useNavigate();
  const [wishlist, setWishlist] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');

 

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);


  const handleProductClick = (product) => {
    navigate(`/ProductDetails/${product.id}`, { state: { product } });
  };  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    const isAlreadyAdded = stored.find(item => item.id === product.id);
  
    if (!isAlreadyAdded) {
      const updated = [...stored, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setWishlist(updated);
    } else {
      setPopupMessage("This product is already in your wishlist!");
      setTimeout(() => {
        setPopupMessage('');
      }, 2000);
    }
  };

  useEffect(() => {
    fetch('https://jewelleryapi-oj08.onrender.com/products')
      .then(res => res.json())
      .then(data => {
        console.log("Fetched products:", data);
        setProducts(data);
      });
  }, []);
  
  
  
  
  

  return (
    <>
    <div className="trending-slider">
      <div className="container">
        <div className="heading-con">
          <h3>Popular Products</h3>
          <h2>Trending Now</h2>
          <img src="/images/Line 2.png" alt="line" />
        </div>
        <Slider {...settings}>
        {productsData.map((product) => (
            <div
              key={product.id}
              style={{ padding: "10px", margin: "0 20px", cursor: "pointer" }}
              onClick={() => handleProductClick(product)}
            >
              <div className="img-box">
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                />
                <div className="icon-container">
                <div
                className={`icon ${wishlist.some(item => item.id === product.id) ? 'active' : ''}`}
                onClick={(e) => handleWishlistClick(e, product)}
              >
                <i className="fas fa-heart"></i>
              </div>
              <div
                className={`icon ${cartItems.some(item => item.id === product.id) ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                <i className="fas fa-shopping-cart"></i>
              </div>
                </div>
              </div>
              <div className="price-box">
                <h4 style={{ marginTop: "10px" }}>{product.name}</h4>
                <p className="describ-text">{product.productdescrib}</p>
                <p className="price-text">${product.price}</p>
                <ul className="star-ratting">
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star"></i></li>
                  <li><i className="fa-solid fa-star-half-stroke"></i></li>
                </ul>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {popupMessage && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}
    </div>
    </>
  );
};

export default FourProductCarousel;
