import React from 'react';
import '../styles/Features.css';
import { FeaturesArray } from '../AdditionalFolder/FeaturesArray';

function Features() {
  return (
    <div className='feature-container'>
      {
        FeaturesArray.map((feature, index) => {
          return(
            <div className="mini-feature-container" key={index}>
            <img src={feature.image} alt="" />

            <p>{feature.title}</p>
            </div>
          )  
        })
      }
    </div>
  )
}

export default Features
