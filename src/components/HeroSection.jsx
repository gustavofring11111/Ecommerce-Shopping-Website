import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css'

function HeroSection() {
  return (
    <div className="hero-section">
    <div className="all-products-div">
      <h4>Trade-in-offer</h4>

      <h2>Super value deals</h2>
      <h2 className='all-products-text'>On all products</h2>

      <p className='save-more-text'>Save more with coupons & up to 70& off!</p>

      <Link to='/shop'>
      <button>Shop now</button>
      </Link>
    </div>
    </div>
  )
}

export default HeroSection
