import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const banners = [
  {
    id: 1,
    image: '/images/slider-1.jpg',
    toptitle: 'New collection',
    title: 'The new ring sensation',
    subtitle: 'Discover a world of breathtaking beauty with our exclusive collection of fine jewelry. From dazzling diamond rings to elegant gold necklaces, our pieces are designed to make every moment special.',
    anchor: 'Shop Now',
  },
  {
    id: 2,
    image: '/images/slider-2.jpg',
    toptitle: 'New collection',
    title: 'The new ring sensation',
    subtitle: 'Discover a world of breathtaking beauty with our exclusive collection of fine jewelry. From dazzling diamond rings to elegant gold necklaces, our pieces are designed to make every moment special.',
    anchor: 'Shop Now',
  },
];

const BannerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="banner-slider">
      <Slider {...settings}>
        {banners.map((banner) => (
          <div key={banner.id} className="slide">
            <img src={banner.image} alt={banner.title} className="slide-image" />
           
            <div className="slide-content">
                <h5>{banner.toptitle}</h5>
              <h2>{banner.title}</h2>
              <p>{banner.subtitle}</p>
              <a href='#' className='comm-btn'>{banner.anchor}</a>
              </div>
        
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
