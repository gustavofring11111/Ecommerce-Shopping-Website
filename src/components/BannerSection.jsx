import React from 'react';
import '../styles/BannerSection.css'

function NewArrivals() {
  return (
    <div className='banner-section-div'>
      <div className="first-line">
      <div className="crazy-deals-div">
        <div className="crazy-deals-text-div">
        <h3>sprin/summer</h3>

        <h2>buy 1 get 1 free</h2>

        <p>The best classic dress is on sell at asos</p>

        <button>Learn More</button>
        </div>
      </div>

      <div className="spring-summer-div">
        <div className="spring-summer-text-div">
        <h3>sprin/summer</h3>

        <h2>upcoming season</h2>

        <p>The best technologies at asos</p>

        <button>Collections</button>
        </div>
      </div>
    </div>

    <div className="second-line">
      <div className="seasonal-sale">
      <div className="seasonal-sale-text">
        <h2>Seasonal sale</h2>

        <p>Winter Collection-50% OFF</p>
      </div>
      </div>

      <div className="new-footwear">
      <div className="new-footwear-text">
        <h2>New Footwear Collection</h2>

        <p>Spring/Summer 2022</p>
      </div>
      </div>

      <div className="t-shirt">
      <div className="t-shirt-text">
        <h2>T-Shirt</h2>

        <p>New Trandy Clothes</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default NewArrivals
