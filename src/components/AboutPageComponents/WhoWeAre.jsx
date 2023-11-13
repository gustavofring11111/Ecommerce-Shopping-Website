import React from 'react';
import '../../styles/AboutPageStyles/WhoWeAre.css'
import WhoWeAreImage from '../../Images/AboutPageImages/who-we-are-image.jpg';

function WhoWeAre() {
  return (
    <div className='WhoWeAre-container'>
      <img src={WhoWeAreImage} alt="" />
      <div className="WhoWeAre-text-div">
      <h1>Who We Are?</h1>

      <p>We believe in a world where you have total freedom to be you, without judgement. To experiment. To express yourself. To be brave and grab life as the extraordinary adventure it is. So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.</p>

      <marquee behavior="" direction="" bgcolor="#ccc" loop="-1" scrollamount="5" width="100%" >Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.</marquee>
      </div>
    </div>
  )
}

export default WhoWeAre
