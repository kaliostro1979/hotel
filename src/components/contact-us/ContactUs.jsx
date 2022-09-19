import React from 'react';
import ContactForm from "../UI/ContactForm";
import ContactsInformation from "./ContactsInformation";

const ContactUs = () => {
  return (
    <div className={"ContactUsContainer"}>
        <h2 className={"ContactUsTitle"}>Contact Us</h2>
        <div className={"ContactUs"}>
            <ContactForm/>
            <ContactsInformation/>
        </div>
    </div>
  );
};

export default ContactUs;