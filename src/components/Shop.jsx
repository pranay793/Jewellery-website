import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bestselling from './Bestselling';
import Trendsec from './TrendSec';

const products = [
  {
    id: 1,
    name: "Bracelets",
    image: "/images/product1.png",
    price: 48.99,
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 2,
    name: "Rings",
    image: "/images/product2.png",
    price: 39.29,
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 3,
    name: "Earrings",
    image: "/images/product3.png",
    price: 15.77,
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 4,
    name: "Earrings",
    image: "/images/product4.png",
    price: 22.00,
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 5,
    name: "Rings",
    image: "/images/product5.png",
    price: 33.99,
    describ: "White Gold, 24 Carat"
  },
  {
    id: 6,
    name: "Rings",
    image: "/images/product6.png",
    price: 16.00,
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 7,
    name: "Rings",
    image: "/images/product7.png",
    price: 11.32,
    describ: "Gold, 24 Carat"
  },
  {
    id: 8,
    name: "Pendant",
    image: "/images/product8.png",
    price: 33.00,
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 9,
    name: "Rings",
    image: "/images/product9.png",
    price: 16.00,
    describ: "White Gold, 24 Carat"
  },
];

const Shop = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(50);

  const handleProductClick = (id) => {
    navigate(`/ProductDetails/${id}`);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.price >= minPrice &&
      product.price <= maxPrice &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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

            {/* FILTER COLUMN */}
            <div className='col-md-3'>
              <div className='filter-box'>
                <h3>PRICE</h3>
                <div className="price-filter">
                  <div className="range-slider">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={minPrice}
                      onChange={(e) => {
                        const value = Math.min(Number(e.target.value), maxPrice - 1);
                        setMinPrice(value);
                      }}
                    />
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={maxPrice}
                      onChange={(e) => {
                        const value = Math.max(Number(e.target.value), minPrice + 1);
                        setMaxPrice(value);
                      }}
                    />
                  </div>
                  <div className="price-values">
                    <span>${minPrice}</span>
                    <span>${maxPrice}</span>
                  </div>
                </div>
              </div>
              <div className='filter-box'>
                <h3>Brand</h3>
                <ul>
                  <li><a href='#'>Brand 1(15)</a></li>
                  <li><a href='#'>Brand 2(16)</a></li>
                  <li><a href='#'>Brand 3(17)</a></li>
                  <li><a href='#'>Brand 4(18)</a></li>
                </ul>
              </div>
              <div className='filter-box'>
                <h3>Size</h3>
                <ul>
                  <li><a href='#'>Size 1(15)</a></li>
                  <li><a href='#'>Size 2(16)</a></li>
                  <li><a href='#'>Size 3(17)</a></li>
                  <li><a href='#'>Size 4(18)</a></li>
                </ul>
              </div>
              <div className='filter-box'>
                <h3>Weight</h3>
                <ul>
                  <li><a href='#'>Weight 1(15)</a></li>
                  <li><a href='#'>Weight 2(16)</a></li>
                  <li><a href='#'>Weight 3(17)</a></li>
                  <li><a href='#'>Weight 4(18)</a></li>
                </ul>
              </div>
            </div>

            {/* PRODUCTS COLUMN */}
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
                  <div className='col-md-4 mb-5' key={product.id}>
                    <div style={{ cursor: "pointer" }} onClick={() => handleProductClick(product.id)}>
                      <div className="img-box w-100">
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
                        />
                        <div className="icon-container">
                          <div className="icon"><i className="fas fa-heart"></i></div>
                          <div className="icon"><i className="fas fa-shopping-cart"></i></div>
                        </div>
                      </div>
                      <div className="price-box">
                        <h4 style={{ marginTop: "10px" }}>{product.name}</h4>
                        <p className="describ-text">{product.describ}</p>
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
    </>
  );
};

export default Shop;
