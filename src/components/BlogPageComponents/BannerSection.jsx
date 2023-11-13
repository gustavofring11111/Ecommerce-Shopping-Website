import React from 'react';
import { BannerArray } from '../../AdditionalFolder/Banner.jsx';
import '../../styles/BlogPageStyles/BannerSection.css'


function BannerSection() {
  return (
    <div className='banner-big-div'>
      {BannerArray.map((banner) => {
        return(
          <div className="banner-div">
            <img src={banner.image} alt="" />

            <div className="text-div">
              <h4>{banner.title}</h4>
              <p>{banner.desription}</p>
              <button>{banner.button}</button>
            </div>
            <h1>{banner.data}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default BannerSection
