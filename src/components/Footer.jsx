import React from 'react';
import '../styles/Footer.css'
import logo from '../Images/logo.svg';
import GooglePlay from '../Images/google-play.jpg';
import AppleImage from '../Images/app-store.jpg';
import PaymentServices from '../Images/payment-services.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
  return (
    <div className='footer-div'>
      <div className="footer-first-line">
      <div className="contact-us-div">
      <img src={logo} alt="" />

      <p>Contact</p>

      <ul>
        <li className='address-text'><span>Address:</span> market, Nukus, Ernazar Alako'z 162 landmark: Dekhkansky, Nukus</li>
        <li><span>Phone: </span> 8 71 140 14 14</li>
        <li><span>Hours:</span> 8:00 - 20:00. Mon - Sun</li>
      </ul>
    </div>

    <div className="about-div">
      <p>About</p>

      <ul>
        <li>About us</li>
        <li>Delivery information</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
        <li>Contact Us</li>
      </ul>
    </div>

    <div className="my-account-div">
      <p>My account</p>

      <ul>
        <li>Sign In</li>
        <li>View Cart</li>
        <li>My Wishlist</li>
        <li>track My Order</li>
        <li>Help</li>
      </ul>
    </div>

    <div className="install-app-div">
      <p>Install App</p>

      <ul>
        <li>From App Store or Google Play</li>
      </ul>

      <div className="app-line">
        
        
          
        <img src={AppleImage} alt="" className='apple-image'/>
        

        <img src={GooglePlay} alt="" className='google-play-icon'/>
        </div>

        <ul>
        <li>Secured Payment Gateways</li>
      </ul>

      <img src={PaymentServices} alt="" className='payment-services'/>
      </div>
    </div>

    <div className="footer-second-line">
      <p>Follow Us</p>

      <FacebookIcon className='facebook-icon'/>
      <TwitterIcon className='twitter-icon'/>
      <InstagramIcon className='instagram-icon'/>
      <PinterestIcon className='printerest-icon'/>
      <YouTubeIcon className='youtube-icon'/>
    </div>

    <ul>
      <li className='copyright'>
         &copy;2023, PaluanovArtur - Thanks For Choosing Us
      </li>
    </ul>
   
    </div>
  )
}

export default Footer;
