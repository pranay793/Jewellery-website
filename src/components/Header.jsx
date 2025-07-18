import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import './custom.css';
import logo from '../assets/logo-retina.svg';
import Wishlist from '../assets/wishlist.png';
import Cart from '../assets/cart.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  updateCartCount();
  window.addEventListener("storage", updateCartCount);

  return () => {
    window.removeEventListener("storage", updateCartCount);
  };
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, 500); // Poll every 0.5s

  return () => clearInterval(interval);
}, []);

const [wishlistCount, setWishlistCount] = useState(0);

useEffect(() => {
  const updateWishlistCount = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(wishlist.length);
  };

  updateWishlistCount();
  window.addEventListener("storage", updateWishlistCount);

  return () => {
    window.removeEventListener("storage", updateWishlistCount);
  };
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(wishlist.length);
  }, 500);

  return () => clearInterval(interval);
}, []);

  return (
    <header className="header">
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-md-3 col-6'>
            <div className="logo">
              <a href="/"><img src={logo} alt="Logo" /></a>
            </div>
          </div> 
          <div className='col-md-6 col-1 order-lg-1 order-2 mob-gap'>
          <div className="menu-icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            ☰
          </div>
          {/* Mobile Slide-In Menu */}
            <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
              <button className="close-btn" onClick={() => setMobileMenuOpen(false)}>×</button>
              <nav className="mobile-nav">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                <Link to="#">About us</Link>
                <Link to="/Shop" onClick={() => setMobileMenuOpen(false)}>Product</Link>
                <Link to="#">Contact us</Link>
              </nav>
            </div>

            <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              <Link to="/">Home</Link>
              <Link to="#">About us</Link>
              <Link to="/Shop">Product</Link>
              <Link to="#">Contact us</Link>
            </nav>
          </div>
          <div className='col-md-3 col-5 order-lg-2 order-1'>
            <div className="header-icons">
              {/* <span><i className="fa-solid fa-magnifying-glass"></i></span> */}
            
            
              
              <div className="cart-icon">
              <Link to="/cart">
              <img src={Cart} alt="Cart" className="hdr-icon" />
      {cartItems.length > 0 && (
        <span className="cart-count">{cartItems.length}</span>
      )}
       </Link>
    </div>
              <span className="wishlist-icon">
                <Link to="/wishlist">
                <img src={Wishlist} alt="Wishlist" className='hdr-icon' />
                  {wishlistCount > 0 && (
                    <span className="wishlist-badge">{wishlistCount}</span>
                  )}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
