
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const items = [
  { id: 1, image: '/images/trust-icon1.png', title: 'Product 1' },
  { id: 2, image: '/images/trust-icon2.png', title: 'Product 2' },
  { id: 3, image: '/images/trust-icon3.png', title: 'Product 3' },
  { id: 4, image: '/images/trust-icon4.png', title: 'Product 4' },
];

const TrustPilot = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // mobile landscape
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile portrait
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="multi-carousel">
        <div className="container">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
};

export default TrustPilot;
