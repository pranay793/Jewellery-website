import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Bestselling from './Bestselling';
import Trendsec from './TrendSec';
import './custom.css';

const Shop = () => {
  const navigate = useNavigate();
  const { cartItems, setCartItems } = useContext(CartContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [maxPrice, setMaxPrice] = useState(100);
  const [wishlist, setWishlist] = useState([]);
  const [productsData, setProducts] = useState([]);
  const [popupMessage, setPopupMessage] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedAvailability, setSelectedAvailability] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(stored);
  }, []);

  useEffect(() => {
    fetch('https://jewelleryapi-oj08.onrender.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        const normalized = data.map(p => p.category?.trim().toLowerCase());
        const uniqueSet = Array.from(new Set(normalized)).map(cat =>
          data.find(p => p.category?.trim().toLowerCase() === cat)?.category
        );
        setCategories(uniqueSet);
      });
  }, []);

  const handleProductClick = (product) => {
    navigate(`/ProductDetails/${product.id}`, { state: { product } });
  };

  const handleWishlistClick = (e, product) => {
    e.stopPropagation();
    const isAlreadyAdded = wishlist.find(item => item.id === product.id);
    if (!isAlreadyAdded) {
      const updated = [...wishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));
      setWishlist(updated);
    } else {
      setPopupMessage("This product is already in your wishlist!");
    }
    setTimeout(() => setPopupMessage(''), 2000);
  };

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
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

  const handleCheckboxChange = (e, value, type) => {
    const checked = e.target.checked;
    if (type === "category") {
      setSelectedCategories(prev =>
        checked ? [...prev, value] : prev.filter(item => item !== value)
      );
    } else if (type === "availability") {
      setSelectedAvailability(prev =>
        checked ? [...prev, value] : prev.filter(item => item !== value)
      );
    }
  };

  const filteredProducts = productsData.filter(product => {
    const matchesPrice = product.price <= maxPrice;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const availabilityStatus = product.Availability === "Stock" ? "In Stock" : "Out of Stock";
    const matchesAvailability = selectedAvailability.length === 0 || selectedAvailability.includes(availabilityStatus);
    return matchesPrice && matchesSearch && matchesCategory && matchesAvailability;
  });

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

            <div className="col-12 d-md-none mb-3">
              <button className="toggle-filter-btn" onClick={() => setShowFilters(!showFilters)}>
                {showFilters ? (
                  <>Hide Filters <i className="fa-solid fa-angle-up"></i></>
                ) : (
                  <>Show Filters <i className="fa-solid fa-angle-down"></i></>
                )}
              </button>
            </div>

            <div className={`filter-panel col-md-3 ${showFilters ? 'mobile-visible' : ''}`}>
              <div className='filter-box'>
                <h3>PRICE</h3>
                <div className="price-filter">
                  <div className="range-slider">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                  </div>
                  <span>Up to ${maxPrice}</span>
                </div>
              </div>

              <div className='filter-box'>
                <h3>Availability</h3>
                <ul>
                  {["In Stock", "Out of Stock"].map(item => (
                    <li key={item}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedAvailability.includes(item)}
                          onChange={(e) => handleCheckboxChange(e, item, 'availability')}
                        /> {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='filter-box'>
                <h3>Product Type</h3>
                <ul>
                  {categories.map(item => (
                    <li key={item}>
                      <label>
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(item)}
                          onChange={(e) => handleCheckboxChange(e, item, 'category')}
                        /> {item}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className='col-md-9'>
              <div className='sort-by'>
                <p>Sort By</p>
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search here..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fas fa-search search-icon"></i>
                </div>
              </div>

              <div className='row'>
                {filteredProducts.map((product) => (
                  <div className='col-md-4 mb-5' key={product.id} onClick={() => handleProductClick(product)}>
                    <div style={{ cursor: "pointer" }}>
                      <div className="img-box shop-box">
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100%", borderRadius: "8px" }}
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
                            onClick={(e) => handleAddToCart(e, product)}
                          >
                            <i className="fas fa-shopping-cart"></i>
                          </div>
                        </div>
                      </div>
                      <div className="price-box">
                        <h4>{product.name}</h4>
                        <p className="describ-text">{product.productdescrib}</p>
                        <p className="price-text">${product.price.toFixed(2)}/10MG</p>
                        <ul className="star-ratting">
                          <li><i className="fa-solid fa-star"></i></li>
                          <li><i className="fa-solid fa-star"></i></li>
                          <li><i className="fa-solid fa-star"></i></li>
                          <li><i className="fa-solid fa-star"></i></li>
                          <li><i className="fa-solid fa-star-half-stroke"></i></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Bestselling />
      <Trendsec />

      {popupMessage && (
        <div className="popup-message">{popupMessage}</div>
      )}
    </>
  );
};

export default Shop;
