import React from 'react';
import '../styles/Newsletter.css'

function Newsletters() {
  return (
    <div className='newsletter-div'>
      <div className="newsletter-text-div">
      <h3>Sign Up For Newsletters</h3>

      <h6>Get E-mail updates about our latest shop and <span>special offers</span> </h6>
      </div>

      <div className="input-div">
        <input type="text" placeholder='Your email address'/>

        <button>Sign Up</button>
      </div>
     
    </div>
  )
}

export default Newsletters
