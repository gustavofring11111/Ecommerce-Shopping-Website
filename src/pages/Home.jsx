import React, {useState}  from 'react';
import axios from 'axios';
import FeaturedProducts from '../components/FeaturedProducts';
import Features from '../components/Features';
import HeroSection from '../components/HeroSection';
import DiscountSection from '../components/DiscountSection';
import BannerSection from '../components/BannerSection';
import Newsletters from '../components/Newsletters';



function Home() {

  return (
    <>
      <HeroSection/>
      <Features/>
      <FeaturedProducts/>
      <DiscountSection/>
      <BannerSection/>
    </>
  )
}

export default Home
