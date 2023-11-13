import React from 'react';
import ContactPageSection from '../components/ContactPage/ContactPageSection.jsx';
import ContactDetails from '../components/ContactPage/ContactDetails.jsx';
import ContactUsForm from '../components/ContactPage/ContactUsForm.jsx';

function Contact() {
  return (
    <>
      <ContactPageSection/>
      <ContactDetails/>
      <ContactUsForm/>
    </>
  )
}

export default Contact
