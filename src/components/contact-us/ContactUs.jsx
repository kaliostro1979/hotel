import React from 'react';
import ContactForm from "../UI/ContactForm";
import ContactsInformation from "./ContactsInformation";

const ContactUs = () => {
  return (
    <div className={"ContactUs"}>
      <ContactForm/>
      <ContactsInformation/>
    </div>
  );
};

export default ContactUs;