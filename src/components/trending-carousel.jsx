import React from "react";
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './custom.css';

const products = [
  {
    id: 1,
    name: "Bracelets",
    image: "/images/product1.png",
    price: "$29.99/10MG",
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 2,
    name: "Rings",
    image: "/images/product2.png",
    price: "$22.29/10MG",
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 3,
    name: "Earrings",
    image: "/images/product3.png",
    price: "$15.77/10MG",
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 4,
    name: "Earrings",
    image: "/images/product4.png",
    price: "$22.00/10MG",
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 5,
    name: "Bracelets",
    image: "/images/product1.png",
    price: "$29.99/10MG",
    describ: "Machine Design, 24 Carat"
  },
  {
    id: 6,
    name: "Rings",
    image: "/images/product2.png",
    price: "$22.29/10MG",
    describ: "Machine Design, 24 Carat"
  },
];

const FourProductCarousel = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/ProductDetails/${id}`);
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
          <h3>Popular Products</h3>
          <h2>Trending Now</h2>
          <img src="/images/Line 2.png" alt="line" />
        </div>
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              style={{ padding: "10px", margin: "0 20px", cursor: "pointer" }}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="img-box">
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
                <p className="price-text">{product.price}</p>
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
    </div>
  );
};

export default FourProductCarousel;
