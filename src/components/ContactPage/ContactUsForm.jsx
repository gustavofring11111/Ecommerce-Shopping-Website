import React from 'react';
import { Profiles } from '../../AdditionalFolder/ProfileArray';
import '../../styles/ContactUsPageStyles/ContactUsForm.css'

function ContactUsForm() {
  return (
    <div className='contact-us-form-div'>
      <div className="contact-us-input-div">
      <p className='leave-a-message'>LEAVE A MESSAGE</p>

      <h3>We love to hear from you</h3>

      <input type="text" placeholder='Your Name'/>

      <input type="text" placeholder='E-mail'/>

      <input type="text" placeholder='Profession'/>

      <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>

      <button>Submit</button>
      </div>

      <div className="profiles-div">
        {Profiles.map((profile) => {
          return(
            <div className='profile-container'>
            <img src={profile.image} alt="" />
            <div className="profile-container-text">
            <h4>{profile.name}</h4>
            <p>{profile.profession}</p>
            <p>{profile.phone}</p>
            <p>{profile.email}</p>
            </div>
            </div>
          )
        })}
          </div>

    </div>
  )
}

export default ContactUsForm
