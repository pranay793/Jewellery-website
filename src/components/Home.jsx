import React from 'react';
import BannerSlider from './BannerSlider';
import TrustPilot from './TrustPilot';
import FourProductCarousel from './trending-carousel';
import Whychoose from './why-choose';
import Bestselling from './Bestselling';
import Trendsec from './TrendSec';
import Reviewsec from './review-sec';

const Home = () => {
  return (
    <><BannerSlider />
    <TrustPilot />
    <FourProductCarousel />
    <Whychoose />
    <Bestselling />
    <Trendsec />
    <Reviewsec />
    </>
  );
};

export default Home;