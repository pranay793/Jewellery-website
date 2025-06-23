import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom.css";

const Bestselling = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);

  const [wishlist, setWishlist] = useState([]);
  const [productsData, setProducts] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');

  const targetIDs = [3, 4, 6, 8, 10, 12];

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        // Convert product.id to Number for accurate comparison
        const filtered = data.filter(product =>
          targetIDs.includes(Number(product.id))
        );
        setProducts(filtered);
      })
     
  }, []);

  const handleProductClick = (product) => {
    navigate(`/ProductDetails/${product.id}`, { state: { product } });
  };

  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    const isAlreadyInWishlist = wishlist.find(item => item.id === product.id);

    if (isAlreadyInWishlist) {
      setPopupMessage("This product is already in your wishlist!");
    } else {
      const updated = [...wishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setWishlist(updated);
    }

    setTimeout(() => setPopupMessage(''), 2000);
  };

  const handleAddToCart = (product) => {
    const isAlreadyInCart = cartItems.find(item => item.id === product.id);

    if (isAlreadyInCart) {
      setPopupMessage("This product is already in your cart!");
    } else {
      const updated = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(updated);
      localStorage.setItem("cart", JSON.stringify(updated));
    }

    setTimeout(() => setPopupMessage(''), 2000);
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

  return (
    <div className="trending-slider">
      <div className="container">
        <div className="heading-con">
          <h3>Shop</h3>
          <h2>Best Selling</h2>
          <img src="/images/Line 2.png" alt="Line" />
        </div>

        {productsData.length === 0 ? (
          <p style={{ textAlign: "center", padding: "20px" }}>No products available.</p>
        ) : (
          <Slider {...settings}>
            {productsData.map((product) => (
              <div
                key={product.id}
                style={{ padding: "10px", cursor: "pointer" }}
                onClick={() => handleProductClick(product)}
              >
                <div className="img-box">
                  <img
                    src={product.image || "/images/placeholder.png"}
                    alt={product.name}
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
                  <h4>{product.name}</h4>
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
        )}
      </div>

      {popupMessage && (
        <div className="popup-message">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Bestselling;
