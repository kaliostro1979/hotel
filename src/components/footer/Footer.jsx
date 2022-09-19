import React from 'react';
import ContactUs from "../contact-us/ContactUs";
import SocialIcons from "../UI/SocialIcons";

const Footer = () => {
    return (
        <footer className={"Footer"}>
            <ContactUs/>
            <SocialIcons light={false}/>
        </footer>
    );
};

export default Footer;