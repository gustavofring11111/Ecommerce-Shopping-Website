import React from 'react';
import MapIcon from '@mui/icons-material/Map';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import '../../styles/ContactUsPageStyles/ContactDetails.css'

function ContactDetails() {
  return (
    <div className='contact-details-div'>
      <div className="contact-details-text">
        <p className='GetInTouch'>GET IN TOUCH</p>

        <h3>Visit one of our agency locations or contact us today</h3>

        <h4>Head Office</h4>

        <div className="address-div">
        <MapIcon/>

        <p>market, Nukus, Ernazar Alako'z 162 landmark: Dekhkansky, Nukus</p>
        </div>

        <div className="contact-div-letter">
          <EmailIcon/>

          <p>contact@example.com</p>
        </div>

        <div className="contact-div-phone">
          <PhoneIcon/>

          <p>contact@example.com</p>
        </div>

        <div className="work-hours">
          <WatchLaterIcon/>

          <p>Mon - Sun: 8:00am - 20:00pm </p>
        </div>
      </div>

      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.248891437438!2d59.60063557533321!3d42.4649949284669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9bdc25e3fc2d%3A0xd8bdcd24fd6ad657!2s24%2F7%20KORZINKA.UZ%20(NBU)!5e0!3m2!1sen!2s!4v1699554842957!5m2!1sen!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map'></iframe>
      </div>
      </div>

 
  )
}

export default ContactDetails
